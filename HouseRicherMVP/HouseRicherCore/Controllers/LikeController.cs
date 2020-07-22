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
    public class LikeController : Controller
    {
        private readonly ILogger<LikeController> _logger;

        public LikeController(ILogger<LikeController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public ActionResult Post()
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
