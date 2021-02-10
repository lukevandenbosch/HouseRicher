using System;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Newtonsoft.Json;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using HouseRicherCore.ModelAPI;
using HouseRicherCore.ModelInternal;
using HouseRicherCore.Model;
using HouseRicherCore.Utilties;

namespace HouseRicherCore.Controllers
{
    [ApiController]
    [Route("api/[controller]/[Action]")]
    public class EmailController : Controller
    {
        private readonly ILogger<EmailController> _logger;

        public EmailController(ILogger<EmailController> logger)
        {
            _logger = logger;
        }
        [HttpPost]
        public ActionResult PasswordReset([FromForm] IncomingEmail reset)
        {
            try {
                if (reset.Email == null) {
                    Response.StatusCode = 400;
                    return Json(ResponseMessage.BadRequest);
                }

                using (HouseRicherContext db = new HouseRicherContext()) {
                    JWTToken userLogin = (from login in db.PersonalLogin
                                            join person in db.PersonalPerson
                                                on login.Id equals person.LoginId
                                        where login.Username == reset.Email.ToLower()
                                        select new JWTToken {
                                            Id = person.Id,
                                            FirstName = person.FirstName,
                                            LastName = person.LastName,
                                            Email = login.Username,
                                            ProfilePicture = ""
                                        }).FirstOrDefault();
                    
                    if (userLogin == null) {
                        Response.StatusCode = 200;
                        return Json(ResponseMessage.Created);
                    }

                    var emailValue = (from message in db.EmailMessages
                                        join email in db.EmailEmail
                                            on message.EmailId equals email.Id
                                        join configuration in db.EmailConfiguration
                                            on email.ConfigurationId equals configuration.Id
                                    where message.MessageName == "Forgot Password"
                                    select new Email {
                                        Id = message.Id,
                                        To = userLogin.Email,
                                        From = email.Email,
                                        Password = email.Password,
                                        Subject = message.Subject,
                                        Message = message.Message,
                                        SMPTServer = configuration.SmtpServer,
                                        Port = configuration.Port
                                    }).FirstOrDefault();

                    String baseUrl = Request.Scheme + "://" + Request.Host;

                    String resetPage = (from page in db.SitePage
                                where page.PageName == "Password Reset"
                                select page.PageUrl).FirstOrDefault();

                    String unsubscribePage = (from page in db.SitePage
                                where page.PageName == "Unsubscribe"
                                select page.PageUrl).FirstOrDefault();

                    String logo = (from asset in db.SiteAssets
                                    where asset.AssetName == "HouseRicher Logo"
                                    select asset.AssetUrl).FirstOrDefault();

                    if (emailValue == null || logo == null || resetPage == null || unsubscribePage == null) {
                        Response.StatusCode = 500;
                        return Json(ResponseMessage.InternalError);
                    }
                    
                    JWTAuthenticate authenticate = new JWTAuthenticate();
                    userLogin.Token = authenticate.GenerateJwtToken(userLogin, 20);

                    emailValue.Message = emailValue.Message.Replace("{{homepage}}", baseUrl).Replace("{{logo}}", (baseUrl + logo)).Replace("{{resetPassword}}", (baseUrl + resetPage.Replace(":token", userLogin.Token))).Replace("{{unsubscribe}}", (baseUrl + unsubscribePage));

                    EmailHelper helper = new EmailHelper();
                    helper.SendEmail(emailValue);

                    using (var transaction = db.Database.BeginTransaction()) {
                        try {
                            db.EmailNotification.Add(new EmailNotification {
                                Email = emailValue.To,
                                IsSent = (Byte)(helper.SentSuccessfully ? 1 : 0),
                                ExceptionMessage = helper.Error,
                                MessageId = emailValue.Id
                            });
                            db.SaveChanges();
                            transaction.Commit();

                            Response.StatusCode = 200;
                            return Json(ResponseMessage.Created);
                        }
                        catch {
                            transaction.Rollback();
                            Response.StatusCode = 500;
                            return Json(ResponseMessage.InternalError);
                        }
                    }
                }
            }
            catch {
                Response.StatusCode = 500;
                return Json(ResponseMessage.InternalError);
            }
        }

        [HttpPost]
        public ActionResult ContactUs([FromForm] IncomingEmail contactUs)
        {
            try {
                if (!Validation.ValidateContactUs(contactUs)) {
                    Response.StatusCode = 400;
                    return Json(ResponseMessage.BadRequest);
                }

                using (HouseRicherContext db = new HouseRicherContext()) {
                    var emailValue = (from message in db.EmailMessages
                                        join email in db.EmailEmail
                                            on message.EmailId equals email.Id
                                        join configuration in db.EmailConfiguration
                                            on email.ConfigurationId equals configuration.Id
                                    where message.MessageName == "Contact Us"
                                    select new Email {
                                        Id = message.Id,
                                        To = email.Email,
                                        From = email.Email,
                                        Password = email.Password,
                                        Subject = message.Subject,
                                        Message = ("Name:<br>" + contactUs.Name + "<br><br>Email:<br>" + contactUs.Email + "<br><br>Message:<br>" + contactUs.Message),
                                        SMPTServer = configuration.SmtpServer,
                                        Port = configuration.Port
                                    }).FirstOrDefault();

                    if (emailValue == null) {
                        Response.StatusCode = 500;
                        return Json(ResponseMessage.InternalError);
                    }

                    EmailHelper helper = new EmailHelper();
                    helper.SendEmail(emailValue);

                    using (var transaction = db.Database.BeginTransaction()) {
                        try {
                            db.EmailNotification.Add(new EmailNotification {
                                Email = emailValue.To,
                                Subject = emailValue.Subject,
                                Message = emailValue.Message,
                                IsSent = (Byte)(helper.SentSuccessfully ? 1 : 0),
                                ExceptionMessage = helper.Error,
                                MessageId = emailValue.Id
                            });
                            db.SaveChanges();
                            transaction.Commit();

                            Response.StatusCode = 200;
                            return Json(ResponseMessage.Created);
                        }
                        catch {
                            transaction.Rollback();
                            Response.StatusCode = 500;
                            return Json(ResponseMessage.InternalError);
                        }
                    }
                }
            }
            catch {
                Response.StatusCode = 500;
                return Json(ResponseMessage.InternalError);
            }
        }
    }
}
