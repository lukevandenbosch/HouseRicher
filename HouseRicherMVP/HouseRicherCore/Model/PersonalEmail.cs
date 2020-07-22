using System;
using System.Collections.Generic;

namespace HouseRicherCore.Model
{
    public partial class PersonalEmail
    {
        public long Id { get; set; }
        public string Email { get; set; }
        public byte? Activated { get; set; }
    }
}
