using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using HouseRicherCore.ModelAPI;
using HouseRicherCore.Model;
using HouseRicherCore.Utilties;

namespace HouseRicherCore.Controllers
{
    [ApiController]
    [Route("api/[controller]/[Action]")]
    public class FollowController : Controller
    {
        private readonly ILogger<FollowController> _logger;

        public FollowController(ILogger<FollowController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ActionResult Following()
        {
            try {
                long? currentUserId = -1;

                if (Request.Headers.ContainsKey("Authorization")) {
                    string tokenHeader = Request.Headers["Authorization"];
                    JWTToken user = null;
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
                    currentUserId = user.Id;
                }

                if (!Request.Headers.ContainsKey("ProfileId")) {
                    Response.StatusCode = 400;
                    return Json(ResponseMessage.BadRequest);
                }

                String profileId = Request.Headers["ProfileId"];

                using (HouseRicherContext db = new HouseRicherContext()) {
                    var followingUsers =  (from follow in db.PersonalFollowing
                                            join person in db.PersonalPerson on follow.FollowingId equals person.Id
                                            join location in db.LocationLocation on person.AddressId equals location.Id
                                            join province in db.LocationProvinceState on location.ProvinceStateId equals province.Id
                                            join profilePic in db.PersonalProfilePicture on person.Id equals profilePic.PersonId into pp
                                            from profilePic in pp.DefaultIfEmpty()
                                            join realtor in db.PersonalRealtor on follow.FollowingId equals realtor.PersonId into r
                                            from realtor in r.DefaultIfEmpty()
                                            join following in db.PersonalFollowing on new {f = follow.FollowingId, i = currentUserId} equals new {f = following.FollowingId, i = following.FollowerId} into f
                                            from following in f.DefaultIfEmpty()
                                            where profileId.Equals(follow.FollowerId.ToString())
                                            select new Realtor {
                                                Id = person.Id,
                                                IsRealtor = (realtor == null ? false : true),
                                                FirstName = person.FirstName,
                                                LastName = person.LastName,
                                                ProfilePicture = (profilePic.ProfilePicture == null ? "" : profilePic.ProfilePicture),
                                                City = location.City,
                                                ProvinceState = province.FullName,
                                                Followed = (following == null ? false : true)
                                            }).ToArray();

                    if (followingUsers == null) {
                        Response.StatusCode = 404;
                        return Json(ResponseMessage.NotFound);
                    }
                    
                    Response.StatusCode = 200;
                    return Json(followingUsers);
                }
            }
            catch {
                Response.StatusCode = 500;
                return Json(ResponseMessage.InternalError);
            }
        }

        [HttpPost]
        public ActionResult Follow()
        {
            try {
                if (!Request.Headers.ContainsKey("Authorization") || !Request.Headers.ContainsKey("PersonId")) {
                    Response.StatusCode = 400;
                    return Json(ResponseMessage.BadRequest);
                }

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

                long personId = Int64.Parse(Request.Headers["PersonId"]);

                if (personId == user.Id) {
                    Response.StatusCode = 400;
                    return Json(ResponseMessage.BadRequest);
                }

                using (HouseRicherContext db = new HouseRicherContext()) {
                    using (var transaction = db.Database.BeginTransaction()) {
                        try {
                            PersonalFollowing following = db.PersonalFollowing.FirstOrDefault(follow => follow.FollowerId == user.Id && follow.FollowingId == personId);

                            if (following != null) {
                                db.PersonalFollowing.Remove(following);
                            }
                            else {
                                db.PersonalFollowing.Add(new PersonalFollowing{FollowingId = personId, FollowerId = user.Id});
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
