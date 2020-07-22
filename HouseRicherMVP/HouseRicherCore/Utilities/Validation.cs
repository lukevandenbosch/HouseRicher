using System.Collections.Generic;
using System.Text.RegularExpressions;
using HouseRicherCore.ModelAPI;

namespace HouseRicherCore.Utilties
{
    public class Validation {
        public static bool ValidateUser(Dictionary<string, string> body) {
            try {
                Regex emailRegex = new Regex(@"^.*@.*\..*$");
                if (body["firstName"] == null || body["firstName"] == "") {
                    return false;
                }
                else if (body["lastName"] == null || body["lastName"] == "") {
                    return false;
                }
                else if (body["email"] == null || body["email"] == "" || !emailRegex.Match(body["email"]).Success) {
                    return false;
                }
                else if (body["password"] == null || body["password"] == "") {
                    return false;
                }
                else {
                    return true;
                }
            }
            catch {
                return false;
            }
        }

        public static bool ValidateRealtor(RealtorIncoming body) {
            try {
                Regex emailRegex = new Regex(@"^.*@.*\..*$");
                if (body.FirstName == null || body.FirstName == "") {
                    return false;
                }
                else if (body.LastName == null || body.LastName == "") {
                    return false;
                }
                else if (body.Email == null || body.Email == "" || !emailRegex.Match(body.Email).Success) {
                    return false;
                }
                else if (body.Password == null || body.Password == "") {
                    return false;
                }
                if (body.About == null || body.About == "") {
                    return false;
                }
                if (body.About == null || body.About == "") {
                    return false;
                }
                else if (body.ProvinceState == null || body.ProvinceState == "") {
                    return false;
                }
                else if (body.City == null || body.City == "") {
                    return false;
                }
                else if (body.Address == null || body.Address == "") {
                    return false;
                }
                else if (body.FileType == null || !(body.FileType == "png" || body.FileType == "jpg")) {
                    return false;
                }
                else if (body.ProfilePicture == null) {
                    return false;
                }
                //TODO: Validate ProfilePic is not malicious code
                else {
                    return true;
                }
            }
            catch {
                return false;
            }
        }
    }
}