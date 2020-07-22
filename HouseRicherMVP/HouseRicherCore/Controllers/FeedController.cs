using System;
using System.Linq;
using System.IO;
using Newtonsoft.Json;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using HouseRicherCore.ModelAPI;
using HouseRicherCore.Model;
using HouseRicherCore.Utilties;

namespace HouseRicherCore.Controllers
{
    [ApiController]
    [Route("api/[controller]/[Action]")]
    public class FeedController : Controller
    {
        private readonly ILogger<FeedController> _logger;

        public FeedController(ILogger<FeedController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ActionResult Get()
        {
            try {
                string tokenHeader = Request.Headers["Authorization"];
                JWTToken user = null;
                if (tokenHeader != null) {
                    if (!tokenHeader.Contains("Bearer ")) {
                        Response.StatusCode = 400;
                        return Json(ResponseMessage.BadRequest);
                    }
                    string token = tokenHeader.Split("Bearer ")[1];

                    JWTAuthenticate authenticate = new JWTAuthenticate();
                    user = authenticate.ValidateJwtToken(token);
                    if (user == null) {
                        Response.StatusCode = 401;
                        return Json(ResponseMessage.UnauthorizedRequest);
                    }
                }

                if (!Request.Headers.ContainsKey("Range")) {
                    Response.StatusCode = 400;
                    return Json(ResponseMessage.BadRequest);
                }

                using (HouseRicherContext db = new HouseRicherContext()) {
                    String criteria = null;
                    if (Request.Headers.ContainsKey("Criteria")) {
                        criteria = Request.Headers["Criteria"];
                    }
                    var feed =  (from post in db.FeedPost
                                    join person in db.PersonalPerson on post.PersonId equals person.Id
                                    join email in db.PersonalEmail on person.EmailId equals email.Id
                                    join likes in db.FeedPostLikes on (post.Id.ToString() + ";" + (user == null ? "" : user.Id.ToString())) equals (likes.PostId.ToString() + ";" + (user == null ? "" : likes.PersonId.ToString())) into likesTemp
                                    from sublikes in likesTemp.DefaultIfEmpty()
                                orderby post.DatePosted descending
                                select new Feed {
                                    Id = post.Id,
                                    Message = post.Message,
                                    Likes = 0,
                                    IsLiked = (sublikes == null ? false : true),
                                    DatePosted = post.DatePosted,
                                    FirstName = person.FirstName,
                                    LastName = person.LastName,
                                    Description = person.Description
                                }).Take(Int32.Parse(Request.Headers["Range"])).ToArray();
                    foreach (var post in feed) {
                        post.Likes = (from like in db.FeedPostLikes
                                        where post.Id == like.PostId
                                        select like).Count();
                        post.Comments = (from comment in db.FeedComment
                                            join person in db.PersonalPerson on comment.PersonId equals person.Id
                                            join email in db.PersonalEmail on person.EmailId equals email.Id
                                            join likes in db.FeedCommentLikes on (comment.Id.ToString() + ";" + (user == null ? "" : user.Id.ToString())) equals (likes.CommentId.ToString() + ";" + (user == null ? "" : likes.PersonId.ToString())) into likesTemp
                                            from sublikes in likesTemp.DefaultIfEmpty()
                                        where comment.PostId == post.Id
                                        orderby comment.DatePosted descending
                                        select new Comment {
                                            Id = comment.Id,
                                            Message = comment.Message,
                                            Likes = 0,
                                            IsLiked = (sublikes == null ? false : true),
                                            DatePosted = comment.DatePosted,
                                            FirstName = person.FirstName,
                                            LastName = person.LastName,
                                            Description = person.Description
                                        }).ToArray();
                        foreach (var comment in post.Comments) {
                            comment.Likes = (from like in db.FeedCommentLikes
                                                where comment.Id == like.CommentId
                                                select like).Count();
                        }
                    }
                    Response.StatusCode = 200;
                    return Json(feed);
                }
            }
            catch {
                Response.StatusCode = 500;
                return Json(ResponseMessage.InternalError);
            }
        }

        [HttpPost]
        public ActionResult Post()
        {
            try {
                string tokenHeader = Request.Headers["Authorization"];
                JWTToken user = null;
                if (tokenHeader != null) {
                    if (!tokenHeader.Contains("Bearer ")) {
                        Response.StatusCode = 400;
                        return Json(ResponseMessage.BadRequest);
                    }
                    string token = tokenHeader.Split("Bearer ")[1];

                    JWTAuthenticate authenticate = new JWTAuthenticate();
                    user = authenticate.ValidateJwtToken(token);
                    if (user == null) {
                        Response.StatusCode = 401;
                        return Json(ResponseMessage.UnauthorizedRequest);
                    }
                }

                Dictionary<string, string> body;
                using (var reader = new StreamReader(Request.Body)) {
                    body = JsonConvert.DeserializeObject<Dictionary<string, string>>(reader.ReadToEnd());
                }

                using (HouseRicherContext db = new HouseRicherContext()) {
                    long? id;
                    if (user == null) {
                        id = (from person in db.PersonalPerson
                                    join login in db.PersonalLogin on person.LoginId equals login.Id
                                where login.Username == "anonymous"
                                select person.Id).FirstOrDefault();
                    }
                    else {
                        id = user.Id;
                    }

                    if (id == null) {
                        Response.StatusCode = 401;
                        return Json(ResponseMessage.UnauthorizedRequest);
                    }

                    using (var transaction = db.Database.BeginTransaction()) {
                        try {
                            if (body.ContainsKey("postId")) {
                                db.FeedComment.Add(new FeedComment { Message = body["message"], DatePosted = DateTime.Now, PostId = Int64.Parse(body["postId"]), PersonId = id });
                            }
                            else {
                                db.FeedPost.Add(new FeedPost { Message = body["message"], DatePosted = DateTime.Now, PersonId = id });
                            }
                            db.SaveChanges();
                            transaction.Commit();
                        }
                        catch {
                            transaction.Rollback();
                            Response.StatusCode = 500;
                            return Json(ResponseMessage.InternalError);
                        }
                    }

                    Response.StatusCode = 200;
                    return Json(ResponseMessage.Created);
                }
            }
            catch {
                Response.StatusCode = 500;
                return Json(ResponseMessage.InternalError);
            }
        }
    }
}
