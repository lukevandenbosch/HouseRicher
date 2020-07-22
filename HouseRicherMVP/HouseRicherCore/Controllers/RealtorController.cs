using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Http;
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

        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> Post([FromForm] RealtorIncoming realtor)
        {
            try {
                if (!Validation.ValidateRealtor(realtor)) {
                    Response.StatusCode = 400;
                    return Json(ResponseMessage.BadRequest);
                }
                using (HouseRicherContext db = new HouseRicherContext()) {
                    var email =  (from login in db.PersonalLogin
                                    where login.Username == realtor.Email.ToLower()
                                    select login).ToArray();
                    
                    if (email.Length != 0) {
                        Response.StatusCode = 409;
                        return Json(ResponseMessage.ConflictingUser);
                    }

                    using (var transaction = db.Database.BeginTransaction()) {
                        try {
                            long? prov_state_id = (from prov in db.LocationProvinceState
                                                where prov.FullName == realtor.ProvinceState
                                                select prov.Id).FirstOrDefault();
                            var locationAdd = new LocationLocation { 
                                Address1 = realtor.Address, 
                                City = realtor.City,
                                ProvinceStateId = prov_state_id
                            };
                            db.LocationLocation.Add(locationAdd);
                            db.SaveChanges();
                            var emailAdd = new PersonalEmail { Email = realtor.Email.ToLower(), Activated = 1 };
                            db.PersonalEmail.Add(emailAdd);
                            db.SaveChanges();
                            String password = BCrypt.Net.BCrypt.HashPassword(realtor.Password, BCrypt.Net.BCrypt.GenerateSalt());
                            var loginAdd = new PersonalLogin { Username = realtor.Email.ToLower(), Password = password, IsActive = 1 };
                            db.PersonalLogin.Add(loginAdd);
                            db.SaveChanges();
                            var personAdd = new PersonalPerson { 
                                FirstName = realtor.FirstName, 
                                LastName = realtor.LastName, 
                                Description = "", 
                                LoginId = loginAdd.Id, 
                                EmailId = emailAdd.Id,
                                AddressId = locationAdd.Id
                            };
                            db.PersonalPerson.Add(personAdd);
                            db.SaveChanges();
                            db.PersonalRealtor.Add(new PersonalRealtor { 
                                PhoneNumberOffice = realtor.PhoneNumberOffice != "" ? realtor.PhoneNumberOffice : null, 
                                PhoneNumberCell = realtor.PhoneNumberCell != "" ? realtor.PhoneNumberCell : null,
                                Website = realtor.Website != "" ? realtor.Website : null,
                                Facebook = realtor.Facebook != "" ? realtor.Facebook : null,
                                Linkedin = realtor.Linkedin != "" ? realtor.Linkedin : null,
                                Twitter = realtor.Twitter != "" ? realtor.Twitter : null,
                                Instagram = realtor.Instagram != "" ? realtor.Instagram : null,
                                About = realtor.About,
                                PersonId = personAdd.Id
                            });
                            db.SaveChanges();

                            String dbFilePath = "/UploadedImages/ProfilePicture-" + personAdd.Id + "." + realtor.FileType;
                            String filePath = "./ClientApp" + dbFilePath;

                            using (var stream = new FileStream(filePath, FileMode.OpenOrCreate))
                            {
                                await realtor.ProfilePicture.CopyToAsync(stream);
                            }
                            db.PersonalProfilePicture.Add(new PersonalProfilePicture {
                                ProfilePicture = dbFilePath,
                                FileType = realtor.FileType,
                                PersonId = personAdd.Id
                            });
                            db.SaveChanges();
                            transaction.Commit();
                        }
                        catch {
                            transaction.Rollback();
                            Response.StatusCode = 500;
                            return Json(ResponseMessage.InternalError);
                        }
                    }
                    
                    Response.StatusCode = 201;
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
