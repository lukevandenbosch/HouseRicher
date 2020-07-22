using System;
using System.Collections.Generic;

namespace HouseRicherCore.Model
{
    public partial class PersonalLogin
    {
        public long Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public DateTime? LastLogin { get; set; }
        public byte? IsActive { get; set; }
    }
}
