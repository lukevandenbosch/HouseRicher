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
        public ActionResult ContactUs([FromForm] IncomingContactUs contactUs)
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
                                        To = contactUs.Email,
                                        From = email.Email,
                                        Password = email.Password,
                                        Subject = message.Subject,
                                        Message = (contactUs.Name + "<br><br>" + contactUs.Message),
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
