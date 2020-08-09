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
    public class ReviewController : Controller
    {
        private readonly ILogger<ReviewController> _logger;

        public ReviewController(ILogger<ReviewController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ActionResult Get()
        {
            try {
                if (!Request.Headers.ContainsKey("ProfileId")) {
                    Response.StatusCode = 400;
                    return Json(ResponseMessage.BadRequest);
                }

                String profileId = Request.Headers["ProfileId"];

                using (HouseRicherContext db = new HouseRicherContext()) {
                    var reviews =  (from realtor in db.PersonalRealtor
                                            join review in db.PersonalReviews on realtor.Id equals review.RealtorId
                                            join person in db.PersonalPerson on review.PersonId equals person.Id
                                            join profilePic in db.PersonalProfilePicture on person.Id equals profilePic.PersonId into pp
                                            from profilePic in pp.DefaultIfEmpty()
                                            where profileId.Equals(realtor.PersonId.ToString())
                                            orderby review.DatePosted descending
                                            select new Review {
                                                Id = person.Id,
                                                ReviewMessage = review.ReviewMessage,
                                                Rating = review.Rating,
                                                PersonId = person.Id,
                                                FirstName = person.FirstName,
                                                LastName = person.LastName,
                                                ProfilePicture = (profilePic == null ? "" : profilePic.ProfilePicture),
                                                DatePosted = review.DatePosted
                                            }).ToArray();
                    
                    Response.StatusCode = 200;
                    return Json(reviews);
                }
            }
            catch {
                Response.StatusCode = 500;
                return Json(ResponseMessage.InternalError);
            }
        }

        [HttpPost]
        public ActionResult Post([FromForm] ReviewIncoming review)
        {
            try {
                if (!Request.Headers.ContainsKey("Authorization")) {
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

                if (review.Message == null || review.Message == "" || 
                        !(review.Rating == "1" || review.Rating == "2" || review.Rating == "3" || review.Rating == "4" || review.Rating == "5") ||
                        review.PersonId == null || review.PersonId == "" || review.PersonId == user.Id.ToString()) {
                    Response.StatusCode = 400;
                    return Json(ResponseMessage.BadRequest);
                }

                using (HouseRicherContext db = new HouseRicherContext()) {
                    var realtors = (from realtorValue in db.PersonalRealtor
                                    where realtorValue.PersonId.ToString() == review.PersonId
                                    select realtorValue).FirstOrDefault();
                    if (realtors == null) {
                        Response.StatusCode = 400;
                        return Json(ResponseMessage.BadRequest);
                    }
                    using (var transaction = db.Database.BeginTransaction()) {
                        try {
                            PersonalReviews reviewAdd = new PersonalReviews { ReviewMessage = review.Message, Rating = Int16.Parse(review.Rating), PersonId = user.Id, RealtorId = realtors.Id };
                            db.PersonalReviews.Add(reviewAdd);
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
