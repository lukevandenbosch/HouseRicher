using System;

namespace HouseRicherCore.ModelAPI {
    public class JWTToken {
        public long Id { get; set;}
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Description { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Token { get; set; }
    }
}