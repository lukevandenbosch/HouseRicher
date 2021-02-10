using System;
using System.Collections.Generic;

namespace HouseRicherCore.Model
{
    public partial class SiteConfiguration
    {
        public long Id { get; set; }
        public string Environment { get; set; }
        public string BaseUrl { get; set; }
    }
}
