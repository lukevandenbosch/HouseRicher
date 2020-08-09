using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using HouseRicherCore.Model;
using HouseRicherCore.Utilties;
using System.Threading.Tasks;
using HouseRicherCore.ModelAPI;

namespace HouseRicherCore.Controllers
{
    [ApiController]
    [Route("api/[controller]/[Action]")]
    public class RegisterController : Controller
    {
        private readonly ILogger<RegisterController> _logger;

        public RegisterController(ILogger<RegisterController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public ActionResult Person([FromForm] IncomingProfile person)
        {
            try {
                if (!Validation.ValidatePerson(person)) {
                    Response.StatusCode = 400;
                    return Json(ResponseMessage.BadRequest);
                }
                using (HouseRicherContext db = new HouseRicherContext()) {
                    var email =  (from login in db.PersonalLogin
                                    where login.Username == person.Email.ToLower()
                                    select login).ToArray();
                    
                    if (email.Length != 0) {
                        Response.StatusCode = 409;
                        return Json(ResponseMessage.ConflictingUser);
                    }

                    using (var transaction = db.Database.BeginTransaction()) {
                        try {
                            long? prov_state_id = (from prov in db.LocationProvinceState
                                                where prov.FullName == person.ProvinceState
                                                select prov.Id).FirstOrDefault();
                            var locationAdd = new LocationLocation { 
                                City = person.City,
                                ProvinceStateId = prov_state_id
                            };
                            db.LocationLocation.Add(locationAdd);
                            db.SaveChanges();
                            var emailAdd = new PersonalEmail { Email = person.Email.ToLower(), Activated = 1 };
                            db.PersonalEmail.Add(emailAdd);
                            db.SaveChanges();
                            String password = BCrypt.Net.BCrypt.HashPassword(person.Password, BCrypt.Net.BCrypt.GenerateSalt());
                            var loginAdd = new PersonalLogin { Username = person.Email.ToLower(), Password = password, IsActive = 1 };
                            db.PersonalLogin.Add(loginAdd);
                            db.SaveChanges();
                            var personAdd = new PersonalPerson { FirstName = person.FirstName, LastName = person.LastName, Description = "", LoginId = loginAdd.Id, EmailId = emailAdd.Id, AddressId = locationAdd.Id };
                            db.PersonalPerson.Add(personAdd);
                            db.SaveChanges();
                            db.LegalAcceptedTerms.Add(new LegalAcceptedTerms { DocumentName = "Terms And Conditions User_v1", PersonId = personAdd.Id, IsAccepted = 1 });
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

        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> Realtor([FromForm] IncomingProfile realtor)
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
                                Brokerage = realtor.Brokerage != "" ? realtor.Brokerage : null,
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
                            db.LegalAcceptedTerms.Add(new LegalAcceptedTerms { DocumentName = "Terms And Conditions Realtor_v1", PersonId = personAdd.Id, IsAccepted = 1 });
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
