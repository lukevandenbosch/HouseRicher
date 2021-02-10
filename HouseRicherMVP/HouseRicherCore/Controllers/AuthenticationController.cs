using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using HouseRicherCore.Model;
using HouseRicherCore.Utilties;
using HouseRicherCore.ModelAPI;

namespace HouseRicherCore.Controllers
{
    [ApiController]
    [Route("api/[controller]/[Action]")]
    public class AuthenticationController : Controller
    {
        private readonly ILogger<AuthenticationController> _logger;

        public AuthenticationController(ILogger<AuthenticationController> logger)
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
                if (body["username"] == null || body["username"] == "" || body["password"] == null || body["password"] == "") {
                    Response.StatusCode = 400;
                    return Json(ResponseMessage.BadRequest);
                }
                using (HouseRicherContext db = new HouseRicherContext()) {
                    JWTToken user = (from person in db.PersonalPerson
                                        join login in db.PersonalLogin on person.LoginId equals login.Id
                                        join profilePic in db.PersonalProfilePicture on person.Id equals profilePic.PersonId into pp
                                        from profilePic in pp.DefaultIfEmpty()
                                    where login.Username == body["username"].ToLower() && login.IsActive == 1 
                                        select new JWTToken {
                                            Id = person.Id,
                                            FirstName = person.FirstName,
                                            LastName = person.LastName,
                                            Email = login.Username,
                                            Password = login.Password,
                                            ProfilePicture = profilePic == null ? "" : profilePic.ProfilePicture
                                        }).FirstOrDefault();

                    if (user == null || !BCrypt.Net.BCrypt.Verify(body["password"], user.Password)) {
                        Response.StatusCode = 401;
                        return Json(ResponseMessage.LoginFailedRequest);
                    }
                    user.Password = null;

                    JWTAuthenticate authenticate = new JWTAuthenticate();
                    user.Token = authenticate.GenerateJwtToken(user, 60);
                    
                    Response.StatusCode = 200;
                    return Json(user);
                }
            }
            catch {
                Response.StatusCode = 500;
                return Json(ResponseMessage.InternalError);
            }
        }

        [HttpPost]
        public ActionResult PasswordReset([FromForm] IncomingPassword password)
        {
            try {
                if (password.PasswordValue == null || password.PasswordValue == "" || !Request.Headers.ContainsKey("Authorization")) {
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
                    return Json(ResponseMessage.UserLoggedOutRequest);
                }
                using (HouseRicherContext db = new HouseRicherContext()) {
                    PersonalLogin loginValue = (from login in db.PersonalLogin
                                                where login.Username == user.Email.ToLower() && login.IsActive == 1 
                                                select login).FirstOrDefault();
                    String passwordEncrypted = BCrypt.Net.BCrypt.HashPassword(password.PasswordValue, BCrypt.Net.BCrypt.GenerateSalt());
                    loginValue.Password = passwordEncrypted;
                    db.SaveChanges();
                            
                    Response.StatusCode = 200;
                    return Json(user);
                }
            }
            catch {
                Response.StatusCode = 500;
                return Json(ResponseMessage.InternalError);
            }
        }

        [HttpPost]
        public ActionResult Refresh()
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
                    return Json(ResponseMessage.UserLoggedOutRequest);
                }
                user.Token = authenticate.GenerateJwtToken(user, 60);

                Response.StatusCode = 200;
                return Json(user);
            }
            catch {
                Response.StatusCode = 500;
                return Json(ResponseMessage.InternalError);
            }
        }
    }
}
