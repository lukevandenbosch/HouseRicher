using System;
using System.Collections.Generic;

namespace HouseRicherCore.Model
{
    public partial class PersonalRealtor
    {
        public long Id { get; set; }
        public string PhoneNumberOffice { get; set; }
        public string PhoneNumberCell { get; set; }
        public string Website { get; set; }
        public string Facebook { get; set; }
        public string Linkedin { get; set; }
        public string Twitter { get; set; }
        public string Instagram { get; set; }
        public string About { get; set; }
        public string Brokerage { get; set; }
        public long? PersonId { get; set; }
    }
}
