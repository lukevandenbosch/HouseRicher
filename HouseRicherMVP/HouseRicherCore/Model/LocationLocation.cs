using System;
using System.Collections.Generic;

namespace HouseRicherCore.Model
{
    public partial class LocationLocation
    {
        public long Id { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string PostalZip { get; set; }
        public string City { get; set; }
        public long? ProvinceStateId { get; set; }
    }
}
