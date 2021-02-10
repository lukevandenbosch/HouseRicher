using System;
using System.Linq;
using System.IO;
using Newtonsoft.Json;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using HouseRicherCore.ModelAPI;
using HouseRicherCore.Model;
using HouseRicherCore.Utilties;

namespace HouseRicherCore.Controllers
{
    [ApiController]
    [Route("api/[controller]/[Action]")]
    public class NotificationController : Controller
    {
        private readonly ILogger<NotificationController> _logger;

        public NotificationController(ILogger<NotificationController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ActionResult GetPosts()
        {
            try {
                if (!Request.Headers.ContainsKey("Authorization")) {
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
                    return Json(ResponseMessage.UnauthorizedRequest);
                }

                using (HouseRicherContext db = new HouseRicherContext()) {
                    var notificationInfo = (from notification in db.FeedNotification
                                                    join person in db.PersonalPerson on notification.FromPersonId equals person.Id
                                                    join profilePicture in db.PersonalProfilePicture on person.Id equals profilePicture.PersonId into pp
                                                    from profilePicture in pp.DefaultIfEmpty()
                                                orderby notification.DatePosted descending
                                                where (notification.ToPersonId == user.Id && notification.IsRead == 0)
                                                select new Notification {
                                                    Id = notification.Id,
                                                    Type = notification.NotificationType,
                                                    IsRead = false,
                                                    FirstName = person.FirstName,
                                                    LastName = person.LastName,
                                                    ProfilePicture = profilePicture.ProfilePicture,
                                                    SiteId = notification.SiteId
                                                }).ToList();
                    
                    notificationInfo.AddRange((from notification in db.FeedNotification
                                                    join person in db.PersonalPerson on notification.FromPersonId equals person.Id
                                                    join profilePicture in db.PersonalProfilePicture on person.Id equals profilePicture.PersonId into pp
                                                    from profilePicture in pp.DefaultIfEmpty()
                                                orderby notification.DatePosted descending
                                                where (notification.ToPersonId == user.Id && notification.IsRead == 1)
                                                select new Notification {
                                                    Id = notification.Id,
                                                    Type = notification.NotificationType,
                                                    IsRead = true,
                                                    FirstName = person.FirstName,
                                                    LastName = person.LastName,
                                                    ProfilePicture = profilePicture.ProfilePicture,
                                                    SiteId = notification.SiteId
                                                }).Take(10).ToList());

                    Response.StatusCode = 200;
                    return Json(notificationInfo);
                }
            }
            catch {
                Response.StatusCode = 500;
                return Json(ResponseMessage.InternalError);
            }
        }

        [HttpPost]
        public ActionResult ReadPosts([FromForm] IncomingNotification incomingNotification)
        {
            try {
                if (!Request.Headers.ContainsKey("Authorization") || 
                    ((incomingNotification.Id == null || incomingNotification.Id == 0) && incomingNotification.ReadAll == null) ||
                    (incomingNotification.ReadAll == false && (incomingNotification.Id == null || incomingNotification.Id == 0))) {
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
                    return Json(ResponseMessage.UnauthorizedRequest);
                }

                using (HouseRicherContext db = new HouseRicherContext()) {
                    FeedNotification notificationInfo;
                    if (incomingNotification.ReadAll == true) {
                        notificationInfo = (from notification in db.FeedNotification
                                                    where (notification.ToPersonId == user.Id && notification.IsRead == 0 && notification.Id == incomingNotification.Id)
                                                    select notification).FirstOrDefault();
                    } else {
                        notificationInfo = (from notification in db.FeedNotification
                                                    where (notification.ToPersonId == user.Id && notification.IsRead == 0 && notification.Id == incomingNotification.Id)
                                                    select notification).FirstOrDefault();
                    }

                    Response.StatusCode = 200;
                    return Json(null);
                }
            }
            catch {
                Response.StatusCode = 500;
                return Json(ResponseMessage.InternalError);
            }
        }
    }
}
