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
    public class RealtorController : Controller
    {
        private readonly ILogger<RealtorController> _logger;

        public RealtorController(ILogger<RealtorController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ActionResult Get()
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

                if (!Request.Headers.ContainsKey("RangeMin") || !Request.Headers.ContainsKey("RangeMax")) {
                    Response.StatusCode = 400;
                    return Json(ResponseMessage.BadRequest);
                }

                using (HouseRicherContext db = new HouseRicherContext()) {
                    var feed =  (from person in db.PersonalPerson
                                    join realtor in db.PersonalRealtor on person.Id equals realtor.PersonId
                                    join profilePicture in db.PersonalProfilePicture on person.Id equals profilePicture.PersonId
                                    join location in db.LocationLocation on person.AddressId equals location.Id
                                    join province in db.LocationProvinceState on location.ProvinceStateId equals province.Id
                                    join following in db.PersonalFollowing on new { p = (long?)person.Id, f = (long?)(user == null ? -1 : user.Id)} equals new { p = following.FollowingId, f = following.FollowerId} into f
                                    from following in f.DefaultIfEmpty()
                                    select new Realtor {
                                        Id = person.Id,
                                        FirstName = person.FirstName,
                                        LastName = person.LastName,
                                        ProfilePicture = profilePicture.ProfilePicture,
                                        City = location.City,
                                        ProvinceState = province.FullName,
                                        Followed = (following == null ? false : true)
                                    }).Skip(Int32.Parse(Request.Headers["RangeMin"])).Take(Int32.Parse(Request.Headers["RangeMax"]) - Int32.Parse(Request.Headers["RangeMin"])).ToArray();
                    
                    Response.StatusCode = 200;
                    return Json(feed);
                }
            }
            catch {
                Response.StatusCode = 500;
                return Json(ResponseMessage.InternalError);
            }
        }
    }
}
