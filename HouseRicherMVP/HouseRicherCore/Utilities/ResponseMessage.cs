using System.Collections.Generic;

namespace HouseRicherCore.Utilties {
    public readonly struct ResponseMessage {
        public static readonly IDictionary<string, string> InternalError = new Dictionary<string, string>() { {"Error", "Internal Server Error"} };
        public static readonly IDictionary<string, string> BadRequest = new Dictionary<string, string>() { {"Error", "Bad Request"} };
        public static readonly IDictionary<string, string> ConflictingUser = new Dictionary<string, string>() { {"Error", "Conflicting User"} };
        public static readonly IDictionary<string, string> Created = new Dictionary<string, string>() { {"Success", "Created"} };
        public static readonly IDictionary<string, string> OkRequest = new Dictionary<string, string>() { {"Success", "Request was Successful"} };
        public static readonly IDictionary<string, string> UnauthorizedRequest = new Dictionary<string, string>() { {"Error", "Unauthorized User"} };
    }
}