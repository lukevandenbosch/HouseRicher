using System;
using System.Collections.Generic;

namespace HouseRicherCore.Model
{
    public partial class LocationCountry
    {
        public long Id { get; set; }
        public string FullName { get; set; }
        public string ShortName { get; set; }
        public string Code { get; set; }
    }
}
