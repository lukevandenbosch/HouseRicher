using System;
using System.Collections.Generic;

namespace HouseRicherCore.Model
{
    public partial class PersonalPerson
    {
        public long Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Description { get; set; }
        public long? EmailId { get; set; }
        public long? LoginId { get; set; }
        public long? AddressId { get; set; }
    }
}
