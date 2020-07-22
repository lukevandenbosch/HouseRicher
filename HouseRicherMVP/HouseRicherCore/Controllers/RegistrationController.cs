using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using HouseRicherCore.Model;
using HouseRicherCore.Utilties;

namespace HouseRicherCore.Controllers
{
    [ApiController]
    [Route("api/[controller]/[Action]")]
    public class RegistrationController : Controller
    {
        private readonly ILogger<RegistrationController> _logger;

        public RegistrationController(ILogger<RegistrationController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public ActionResult Post()
        {
            try {
                Dictionary<string, string> body;
                using (var reader = new StreamReader(Request.Body)) {
                    body = JsonConvert.DeserializeObject<Dictionary<string, string>>(reader.ReadToEnd());
                }
                if (!Validation.ValidateUser(body)) {
                    Response.StatusCode = 400;
                    return Json(ResponseMessage.BadRequest);
                }
                using (HouseRicherContext db = new HouseRicherContext()) {
                    var email =  (from login in db.PersonalLogin
                                    where login.Username == body["email"].ToLower()
                                    select login).ToArray();
                    
                    if (email.Length != 0) {
                        Response.StatusCode = 409;
                        return Json(ResponseMessage.ConflictingUser);
                    }

                    using (var transaction = db.Database.BeginTransaction()) {
                        try {
                            var emailAdd = new PersonalEmail { Email = body["email"].ToLower(), Activated = 1 };
                            db.PersonalEmail.Add(emailAdd);
                            db.SaveChanges();
                            String password = BCrypt.Net.BCrypt.HashPassword(body["password"], BCrypt.Net.BCrypt.GenerateSalt());
                            var loginAdd = new PersonalLogin { Username = body["email"].ToLower(), Password = password, IsActive = 1 };
                            db.PersonalLogin.Add(loginAdd);
                            db.SaveChanges();
                            db.PersonalPerson.Add(new PersonalPerson { FirstName = body["firstName"], LastName = body["lastName"], Description = "", LoginId = loginAdd.Id, EmailId = emailAdd.Id });
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
