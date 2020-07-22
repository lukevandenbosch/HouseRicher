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
                                where login.Username == body["username"].ToLower() && login.IsActive == 1 
                                select new JWTToken {
                                    Id = person.Id,
                                    FirstName = person.FirstName,
                                    LastName = person.LastName,
                                    Description = person.Description,
                                    Email = login.Username,
                                    Password = login.Password
                                }).FirstOrDefault();

                    if (user == null || !BCrypt.Net.BCrypt.Verify(body["password"], user.Password)) {
                        Response.StatusCode = 401;
                        return Json(ResponseMessage.UnauthorizedRequest);
                    }
                    user.Password = null;

                    JWTAuthenticate authenticate = new JWTAuthenticate();
                    user.Token = authenticate.GenerateJwtToken(user);
                    
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
                    return Json(ResponseMessage.UnauthorizedRequest);
                }
                user.Token = authenticate.GenerateJwtToken(user);

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
