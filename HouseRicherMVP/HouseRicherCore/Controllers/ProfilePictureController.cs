using System;
using System.Linq;
using System.IO;
using System.Threading.Tasks;
using System.Text;
using Newtonsoft.Json;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using HouseRicherCore.ModelAPI;
using HouseRicherCore.Model;
using HouseRicherCore.Utilties;

namespace HouseRicherCore.Controllers
{
    [ApiController]
    [Route("api/[controller]/[Action]")]
    public class ProfilePictureController : Controller
    {
        private readonly ILogger<ProfilePictureController> _logger;

        public ProfilePictureController(ILogger<ProfilePictureController> logger)
        {
            _logger = logger;
        }

        [HttpPost, DisableRequestSizeLimit]
        public async Task<IActionResult> Post(List<IFormFile> files)
        {
            try {
                if (!Request.Headers.ContainsKey("Email") || Request.Headers.ContainsKey("Image-Type") || !(Request.Headers["Image-Type"] == "png" || Request.Headers["Image-Type"] == "jpg")) {
                    Response.StatusCode = 400;
                    return Json(ResponseMessage.BadRequest);
                }
                using (HouseRicherContext db = new HouseRicherContext()) {
                    using (var transaction = db.Database.BeginTransaction()) {
                        try {
                            long? person_id = (from login in db.PersonalLogin
                                                    join person in db.PersonalPerson on login.Id equals person.LoginId
                                                where login.Username == Request.Headers["Email"]
                                                select person.Id).FirstOrDefault();
                            if (person_id == null || person_id == 0) {
                                Response.StatusCode = 401;
                                return Json(ResponseMessage.UnauthorizedRequest);
                            }
                            
                            String dbFilePath = "/UploadedImages/ProfilePicture-" + person_id + "." + Request.Headers["Image-Type"];
                            String filePath = "./ClientApp" + dbFilePath;

                            using (var stream = new FileStream(filePath, FileMode.OpenOrCreate))
                            {
                                await files.FirstOrDefault().CopyToAsync(stream);
                            }
                            db.PersonalProfilePicture.Add(new PersonalProfilePicture {
                                ProfilePicture = dbFilePath,
                                FileType = Request.Headers["Image-Type"],
                                PersonId = person_id
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
                    return Ok(ResponseMessage.Created);
                }
            }
            catch {
                Response.StatusCode = 500;
                return Json(ResponseMessage.InternalError);
            }
        }
    }
}
