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
                if (!Request.Headers.ContainsKey("Range")) {
                    Response.StatusCode = 400;
                    return Json(ResponseMessage.BadRequest);
                }

                using (HouseRicherContext db = new HouseRicherContext()) {
                    var feed =  (from person in db.PersonalPerson
                                    join email in db.PersonalEmail on person.EmailId equals email.Id
                                    join realtor in db.PersonalRealtor on person.Id equals realtor.PersonId
                                    join profilePicture in db.PersonalProfilePicture on person.Id equals profilePicture.PersonId
                                    join location in db.LocationLocation on person.AddressId equals location.Id
                                    join province in db.LocationProvinceState on location.ProvinceStateId equals province.Id
                                    select new Realtor{
                                        FirstName = person.FirstName,
                                        LastName = person.LastName,
                                        Email = email.Email,
                                        PhoneNumberOffice = realtor.PhoneNumberOffice,
                                        PhoneNumberCell = realtor.PhoneNumberCell,
                                        Website = realtor.Website,
                                        Facebook = realtor.Facebook,
                                        Linkedin = realtor.Linkedin,
                                        Twitter = realtor.Twitter,
                                        Instagram = realtor.Instagram,
                                        About = realtor.About,
                                        ProfilePicture = profilePicture.ProfilePicture,
                                        Address = location.Address1,
                                        City = location.City,
                                        ProvinceState = province.FullName
                                    }).Take(Int32.Parse(Request.Headers["Range"])).ToArray();
                    
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
