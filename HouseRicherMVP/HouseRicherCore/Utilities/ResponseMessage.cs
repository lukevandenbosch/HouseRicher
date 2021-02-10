using System.Collections.Generic;

namespace HouseRicherCore.Utilties {
    public readonly struct ResponseMessage {
        public static readonly IDictionary<string, string> InternalError = new Dictionary<string, string>() { {"Error", "Internal Server Error"} };
        public static readonly IDictionary<string, string> BadRequest = new Dictionary<string, string>() { {"Error", "Bad Request"} };
        public static readonly IDictionary<string, string> ConflictingUser = new Dictionary<string, string>() { {"Error", "Email is already in use."} };
        public static readonly IDictionary<string, string> NotFound = new Dictionary<string, string>() { {"Error", "Not Found"} };
        public static readonly IDictionary<string, string> Created = new Dictionary<string, string>() { {"Success", "Created"} };
        public static readonly IDictionary<string, string> Updated = new Dictionary<string, string>() { {"Success", "Updated"} };
        public static readonly IDictionary<string, string> OkRequest = new Dictionary<string, string>() { {"Success", "Request was Successful"} };
        public static readonly IDictionary<string, string> UnauthorizedRequest = new Dictionary<string, string>() { {"Error", "Unauthorized User"} };
        public static readonly IDictionary<string, string> UserLoggedOutRequest = new Dictionary<string, string>() { {"Error", "Logged Out"} };
        public static readonly IDictionary<string, string> LoginFailedRequest = new Dictionary<string, string>() { {"Error", "Email or Password is incorrect."} };
    }
}