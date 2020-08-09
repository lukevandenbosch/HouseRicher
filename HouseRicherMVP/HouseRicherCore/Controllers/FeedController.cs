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
        public ActionResult GetPosts()
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

                if (!Request.Headers.ContainsKey("RangeMin") || !Request.Headers.ContainsKey("RangeMax")) {
                    Response.StatusCode = 400;
                    return Json(ResponseMessage.BadRequest);
                }

                string postId = null;
                if (Request.Headers.ContainsKey("PostId")) {
                    postId = Request.Headers["PostId"];
                }

                using (HouseRicherContext db = new HouseRicherContext()) {
                    var feed =  (from post in db.FeedPost
                                    join person in db.PersonalPerson on post.PersonId equals person.Id
                                    join email in db.PersonalEmail on person.EmailId equals email.Id
                                    join likes in db.FeedPostLikes on (post.Id.ToString() + ";" + (user == null ? "" : user.Id.ToString())) equals (likes.PostId.ToString() + ";" + (user == null ? "" : likes.PersonId.ToString())) into likesTemp
                                    from sublikes in likesTemp.DefaultIfEmpty()
                                    join profilePic in db.PersonalProfilePicture on person.Id equals profilePic.PersonId into pp
                                    from profilePic in pp.DefaultIfEmpty()
                                where (postId == null ? true : (post.Id.ToString() == postId))
                                orderby post.DatePosted descending
                                select new Feed {
                                    Id = post.Id,
                                    Subject = post.Subject,
                                    Message = post.Message,
                                    Likes = 0,
                                    IsLiked = (sublikes == null ? false : true),
                                    DatePosted = post.DatePosted,
                                    PersonId = person.Id,
                                    FirstName = person.FirstName,
                                    LastName = person.LastName,
                                    ProfilePicture = (profilePic == null ? "" : profilePic.ProfilePicture),
                                    CommentCount = 0
                                }).Skip(Int32.Parse(Request.Headers["RangeMin"])).Take(Int32.Parse(Request.Headers["RangeMax"]) - Int32.Parse(Request.Headers["RangeMin"])).ToArray();
                    foreach (var post in feed) {
                        post.Likes = (from like in db.FeedPostLikes
                                        where post.Id == like.PostId
                                        select like).Count();
                        post.CommentCount = (from comment in db.FeedComment
                                            where comment.PostId == post.Id
                                            select comment).Count();
                    }
                    
                    var feedList = new FeedList {
                        Count = (from post in db.FeedPost select 1).Count(),
                        RangeMin = Int32.Parse(Request.Headers["RangeMin"]),
                        RangeMax = Int32.Parse(Request.Headers["RangeMax"]),
                        Feed = feed
                    };

                    Response.StatusCode = 200;
                    return Json(feedList);
                }
            }
            catch {
                Response.StatusCode = 500;
                return Json(ResponseMessage.InternalError);
            }
        }

        [HttpGet]
        public ActionResult GetComments()
        {
            try {
                JWTToken user = null;

                if (Request.Headers.ContainsKey("Authorization")) {
                    string tokenHeader = Request.Headers["Authorization"];
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

                if (!Request.Headers.ContainsKey("PostId")) {
                    Response.StatusCode = 400;
                    return Json(ResponseMessage.BadRequest);
                }

                String postId = Request.Headers["PostId"];

                using (HouseRicherContext db = new HouseRicherContext()) {
                    var comments =  (from comment in db.FeedComment
                                    join person in db.PersonalPerson on comment.PersonId equals person.Id
                                    join profilePic in db.PersonalProfilePicture on person.Id equals profilePic.PersonId into pp
                                    from profilePic in pp.DefaultIfEmpty()
                                    join userLikes in db.FeedCommentLikes on new {i = (long?)comment.Id, u = (long?)(user == null ? -1 : user.Id)} equals new {i = userLikes.CommentId, u = userLikes.PersonId} into l
                                    from userLikes in l.DefaultIfEmpty()
                                orderby comment.DatePosted descending
                                where comment.PostId.ToString() == postId
                                select new Comment {
                                    Id = comment.Id,
                                    Message = comment.Message,
                                    Likes = 0,
                                    IsLiked = (userLikes == null ? false : true),
                                    DatePosted = comment.DatePosted,
                                    PersonId = person.Id,
                                    FirstName = person.FirstName,
                                    LastName = person.LastName,
                                    ProfilePicture = (profilePic == null ? "" : profilePic.ProfilePicture)
                                }).ToArray();
                    foreach (var comment in comments) {
                        comment.Likes = (from like in db.FeedCommentLikes
                                            where like.CommentId == comment.Id
                                            select 1).Count();
                    }

                    Response.StatusCode = 200;
                    return Json(comments);
                }
            }
            catch {
                Response.StatusCode = 500;
                return Json(ResponseMessage.InternalError);
            }
        }

        [HttpGet]
        public ActionResult GetUserPosts()
        {
            try {
                if (!Request.Headers.ContainsKey("ProfileId")) {
                    Response.StatusCode = 400;
                    return Json(ResponseMessage.BadRequest);
                }

                String profileId = Request.Headers["ProfileId"];

                using (HouseRicherContext db = new HouseRicherContext()) {
                    var feed =  ((from post in db.FeedPost
                                    join person in db.PersonalPerson on post.PersonId equals person.Id
                                    where profileId.Equals(person.Id.ToString())
                                    orderby post.DatePosted descending
                                    select new UserPost {
                                        Id = post.Id,
                                        Type = "Question",
                                        Subject = post.Subject,
                                        Message = post.Message,
                                        DatePosted = post.DatePosted,
                                    }).Union(
                                from comment in db.FeedComment
                                join post in db.FeedPost on comment.PostId equals post.Id
                                join person in db.PersonalPerson on comment.PersonId equals person.Id
                                    where profileId.Equals(person.Id.ToString())
                                    orderby post.DatePosted descending
                                    select new UserPost {
                                        Id = post.Id,
                                        Type = "Answer",
                                        Subject = post.Subject,
                                        Message = comment.Message,
                                        DatePosted = comment.DatePosted,
                                    })).ToArray();

                    
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
        public ActionResult Post([FromForm] PostIncoming post)
        {
            try {
                JWTToken user = null;

                if (Request.Headers.ContainsKey("Authorization")) {
                    string tokenHeader = Request.Headers["Authorization"];
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
                else {
                    if (post.TermsAndConditions != "true") {
                        Response.StatusCode = 400;
                        return Json(ResponseMessage.BadRequest);
                    }
                }

                if (post.Message == null || post.Message == "") {
                        Response.StatusCode = 400;
                        return Json(ResponseMessage.BadRequest);
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
                            if (post.PostId != null && post.PostId != "") {
                                FeedComment comment = new FeedComment { Message = post.Message, DatePosted = DateTime.Now, PostId = Int64.Parse(post.PostId), PersonId = id };
                                db.FeedComment.Add(comment);
                                db.SaveChanges();

                                db.LegalAcceptedTerms.Add(new LegalAcceptedTerms{ DocumentName = "Terms And Conditions Anonymous_v1", CommentId = comment.Id, IsAccepted = 1 });
                                db.SaveChanges();
                            }
                            else {
                                FeedPost postMessage = new FeedPost { Subject = post.Subject, Message = post.Message, DatePosted = DateTime.Now, PersonId = id };
                                db.FeedPost.Add(postMessage);
                                db.SaveChanges();

                                db.LegalAcceptedTerms.Add(new LegalAcceptedTerms{ DocumentName = "Terms And Conditions Anonymous_v1", PostId = postMessage.Id, IsAccepted = 1 });
                                db.SaveChanges();
                            }
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

        [HttpPost]
        public ActionResult Like()
        {
            try {
                string tokenHeader = Request.Headers["Authorization"];
                if (!tokenHeader.Contains("Bearer ")) {
                    Response.StatusCode = 400;
                    return Json(ResponseMessage.BadRequest);
                }
                string token = tokenHeader.Split("Bearer ")[1];

                JWTAuthenticate authenticate = new JWTAuthenticate();
                JWTToken user = authenticate.ValidateJwtToken(token);
                if (user == null) {
                    Response.StatusCode = 401;
                    return Json(ResponseMessage.UnauthorizedRequest);
                }

                Dictionary<string, string> body;
                using (var reader = new StreamReader(Request.Body)) {
                    body = JsonConvert.DeserializeObject<Dictionary<string, string>>(reader.ReadToEnd());
                }

                using (HouseRicherContext db = new HouseRicherContext()) {
                    using (var transaction = db.Database.BeginTransaction()) {
                        try {
                            if (body.ContainsKey("postId")) {
                                FeedPostLikes updatedLike = db.FeedPostLikes.FirstOrDefault(like => like.PersonId == user.Id && like.PostId == Int64.Parse(body["postId"]));

                                if (updatedLike != null) {
                                    db.FeedPostLikes.Remove(updatedLike);
                                }
                                else {
                                    db.FeedPostLikes.Add(new FeedPostLikes{PersonId = user.Id, PostId = Int64.Parse(body["postId"])});
                                }
                            }
                            else {
                                FeedCommentLikes updatedLike = db.FeedCommentLikes.FirstOrDefault(like => like.PersonId == user.Id && like.CommentId == Int64.Parse(body["commentId"]));
                                
                                if (updatedLike != null) {
                                    db.FeedCommentLikes.Remove(updatedLike);
                                }
                                else {
                                    db.FeedCommentLikes.Add(new FeedCommentLikes{PersonId = user.Id, CommentId = Int64.Parse(body["commentId"])});
                                }
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
