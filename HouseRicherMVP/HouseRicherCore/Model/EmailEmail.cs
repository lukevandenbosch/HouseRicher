using System;
using System.Collections.Generic;

namespace HouseRicherCore.Model
{
    public partial class EmailEmail
    {
        public long Id { get; set; }
        public string EmailType { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public long? ConfigurationId { get; set; }
    }
}
