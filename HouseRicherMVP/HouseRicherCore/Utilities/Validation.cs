using System.Collections.Generic;
using System.Text.RegularExpressions;
using HouseRicherCore.ModelAPI;

namespace HouseRicherCore.Utilties
{
    public class Validation {
        public static bool ValidateContactUs(IncomingEmail contactUs) {
            try {
                Regex emailRegex = new Regex(@"^.*@.*\..*$");
                if (contactUs.Email == null || contactUs.Email == "" || !emailRegex.Match(contactUs.Email).Success) {
                    return false;
                }
                else if (contactUs.Message == null) {
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
        public static bool ValidatePerson(IncomingProfile body) {
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
                else if (body.City == null || body.City == "") {
                    return false;
                }
                else if (body.ProvinceState == null || body.ProvinceState == "") {
                    return false;
                }
                else if (body.TermsAndConditions != "true") {
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

        public static bool ValidateRealtor(IncomingProfile body) {
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
                else if (body.FileType == null || !(body.FileType.ToLower() == "png" || body.FileType.ToLower() == "jpg")) {
                    return false;
                }
                else if (body.ProfilePicture == null) {
                    return false;
                }
                else if (body.TermsAndConditions != "true") {
                    return false;
                }
                else if (body.Trial != "true") {
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