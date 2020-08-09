using System;
using System.Linq;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using HouseRicherCore.ModelAPI;
using HouseRicherCore.Model;
using HouseRicherCore.Utilties;
using System.Text.RegularExpressions;

namespace HouseRicherCore.Controllers
{
    [ApiController]
    [Route("api/[controller]/[Action]")]
    public class ProfileController : Controller
    {
        private readonly ILogger<ProfileController> _logger;

        public ProfileController(ILogger<ProfileController> logger)
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

                if (!Request.Headers.ContainsKey("ProfileId")) {
                    Response.StatusCode = 400;
                    return Json(ResponseMessage.BadRequest);
                }

                String profileId = Request.Headers["ProfileId"];

                using (HouseRicherContext db = new HouseRicherContext()) {
                    var realtorProfile =  (from person in db.PersonalPerson
                                            join email in db.PersonalEmail on person.EmailId equals email.Id
                                            join realtor in db.PersonalRealtor on person.Id equals realtor.PersonId into r
                                            from realtor in r.DefaultIfEmpty()
                                            join profilePicture in db.PersonalProfilePicture on person.Id equals profilePicture.PersonId into pp
                                            from profilePicture in pp.DefaultIfEmpty()
                                            join location in db.LocationLocation on person.AddressId equals location.Id
                                            join province in db.LocationProvinceState on location.ProvinceStateId equals province.Id
                                            join following in db.PersonalFollowing on new {f = (long?)person.Id, i = (long?)(user == null ? -1 : user.Id)} equals new {f = following.FollowingId, i = following.FollowerId} into f
                                            from following in f.DefaultIfEmpty()
                                            where profileId.Equals(person.Id.ToString())
                                            select new Profile {
                                                Id = person.Id,
                                                IsRealtor = (realtor == null ? false : true),
                                                FirstName = person.FirstName,
                                                LastName = person.LastName,
                                                Email = email.Email,
                                                PhoneNumberOffice = (realtor == null ? "" : realtor.PhoneNumberOffice),
                                                PhoneNumberCell = (realtor == null ? "" : realtor.PhoneNumberCell),
                                                Website = (realtor == null ? "" : realtor.Website),
                                                Facebook = (realtor == null ? "" : realtor.Facebook),
                                                Linkedin = (realtor == null ? "" : realtor.Linkedin),
                                                Twitter = (realtor == null ? "" : realtor.Twitter),
                                                Instagram = (realtor == null ? "" : realtor.Instagram),
                                                About = (realtor == null ? "" : realtor.About),
                                                Brokerage = (realtor == null ? "" : realtor.Brokerage),
                                                ProfilePicture = (profilePicture == null ? "" : profilePicture.ProfilePicture),
                                                Address = location.Address1,
                                                City = location.City,
                                                ProvinceState = province.FullName,
                                                Followers = 0,
                                                Following = (following == null ? false : true)
                                            }).FirstOrDefault();

                    if (realtorProfile == null) {
                        Response.StatusCode = 404;
                        return Json(ResponseMessage.NotFound);
                    }
                    
                    realtorProfile.Followers = (from followers in db.PersonalFollowing
                                                    where followers.FollowingId == realtorProfile.Id
                                                    select followers).Count();
                    
                    Response.StatusCode = 200;
                    return Json(realtorProfile);
                }
            }
            catch {
                Response.StatusCode = 500;
                return Json(ResponseMessage.InternalError);
            }
        }

        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> Update([FromForm] IncomingProfile profile) {
            try {
                if (!Request.Headers.ContainsKey("Authorization")) {
                    Response.StatusCode = 401;
                    return Json(ResponseMessage.UnauthorizedRequest);
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

                using (HouseRicherContext db = new HouseRicherContext()) {
                    var realtorUpdate = (from realtor in db.PersonalRealtor
                                            where realtor.PersonId == user.Id
                                            select realtor).FirstOrDefault();
                    var personUpdate = (from person in db.PersonalPerson
                                        where person.Id == user.Id
                                        select person).FirstOrDefault();
                    PersonalEmail emailUpdate = null;
                    if (profile.Email != null && profile.Email != "") {
                        emailUpdate = (from email in db.PersonalEmail
                                            where personUpdate.EmailId == email.Id
                                            select email).FirstOrDefault();
                    }
                    LocationLocation locationUpdate = null;
                    LocationProvinceState provinceStateUpdate = null;
                    if ((profile.Address != null && profile.Address != "") ||
                        (profile.City != null && profile.City != "") ||
                        (profile.ProvinceState != null && profile.ProvinceState != "")) {
                        locationUpdate = (from location in db.LocationLocation
                                                where personUpdate.AddressId == location.Id
                                                select location).FirstOrDefault();
                        provinceStateUpdate = (from province in db.LocationProvinceState
                                                where province.FullName == profile.ProvinceState
                                                select province).FirstOrDefault();
                    }
                    PersonalProfilePicture profilePictureUpdate = null;
                    if (profile.ProfilePicture != null) {
                        profilePictureUpdate = (from profilePicture in db.PersonalProfilePicture
                                                where personUpdate.Id == profilePicture.PersonId
                                                select profilePicture).FirstOrDefault();
                    }
                    using (var transaction = db.Database.BeginTransaction()) {
                        try {
                            if (personUpdate != null) {
                                bool changed = false;
                                if (profile.FirstName != null && profile.FirstName != "") {
                                    personUpdate.FirstName = profile.FirstName;
                                    changed = true;
                                }
                                if (profile.LastName != null && profile.LastName != "") {
                                    personUpdate.LastName = profile.LastName;
                                    changed = true;
                                }
                                if (changed) {
                                    db.SaveChanges();
                                }
                            }

                            Regex emailRegex = new Regex(@"^.*@.*\..*$");
                            if (emailUpdate != null && profile.Email != null && profile.Email != "" && emailRegex.Match(profile.Email).Success) {
                                emailUpdate.Email = profile.Email;
                                db.SaveChanges();
                            }

                            if (locationUpdate != null) {
                                bool changed = false;
                                if (profile.Address != null) {
                                    locationUpdate.Address1 = profile.Address;
                                    changed = true;
                                }
                                if (profile.City != null && profile.City != "") {
                                    locationUpdate.City = profile.City;
                                    changed = true;
                                }
                                if (provinceStateUpdate != null && profile.ProvinceState != null && profile.ProvinceState != "") {
                                    locationUpdate.ProvinceStateId = provinceStateUpdate.Id;
                                    changed = true;
                                }
                                if (changed) {
                                    db.SaveChanges();
                                }
                            }

                            if (realtorUpdate != null) {
                                bool changed = false;
                                if (profile.About != null && profile.About != "") {
                                    realtorUpdate.About = profile.About;
                                    changed = true;
                                }
                                if (profile.Brokerage != null) {
                                    realtorUpdate.Brokerage = profile.Brokerage;
                                    changed = true;
                                }
                                if (profile.Website != null) {
                                    realtorUpdate.Website = profile.Website;
                                    changed = true;
                                }
                                if (profile.PhoneNumberCell != null) {
                                    realtorUpdate.PhoneNumberCell = profile.PhoneNumberCell;
                                    changed = true;
                                }
                                if (profile.PhoneNumberOffice != null) {
                                    realtorUpdate.PhoneNumberOffice = profile.PhoneNumberOffice;
                                    changed = true;
                                }
                                if (profile.Facebook != null) {
                                    realtorUpdate.Facebook = profile.Facebook;
                                    changed = true;
                                }
                                if (profile.Linkedin != null) {
                                    realtorUpdate.Linkedin = profile.Linkedin;
                                    changed = true;
                                }
                                if (profile.Twitter != null) {
                                    realtorUpdate.Twitter = profile.Twitter;
                                    changed = true;
                                }
                                if (profile.Instagram != null) {
                                    realtorUpdate.Instagram = profile.Instagram;
                                    changed = true;
                                }
                                if (changed) {
                                    db.SaveChanges();
                                }
                            }

                            if (profile.ProfilePicture != null && profile.FileType != null) {
                                String dbFilePath = "/UploadedImages/ProfilePicture-" + personUpdate.Id + "." + profile.FileType;
                                String filePath = "./ClientApp" + dbFilePath;

                                using (var stream = new FileStream(filePath, FileMode.OpenOrCreate))
                                {
                                    await profile.ProfilePicture.CopyToAsync(stream);
                                }
                                if (profilePictureUpdate == null) {
                                    db.PersonalProfilePicture.Add(new PersonalProfilePicture {
                                        ProfilePicture = dbFilePath,
                                        FileType = profile.FileType,
                                        PersonId = personUpdate.Id
                                    });
                                }
                                else {
                                    profilePictureUpdate.FileType = profile.FileType;
                                    profilePictureUpdate.ProfilePicture = dbFilePath;
                                }
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

                    Response.StatusCode = 201;
                    return Json(ResponseMessage.Updated);
                }
            }
            catch {
                Response.StatusCode = 500;
                return Json(ResponseMessage.InternalError);
            }
        }
    }
}
