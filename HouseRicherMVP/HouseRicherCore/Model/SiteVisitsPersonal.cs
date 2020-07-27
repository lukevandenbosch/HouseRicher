using System;
using System.Collections.Generic;

namespace HouseRicherCore.Model
{
    public partial class SiteVisitsPersonal
    {
        public long Id { get; set; }
        public long? VisitedPersonId { get; set; }
        public long? VisitingPersonId { get; set; }
        public DateTimeOffset? DateVistited { get; set; }
    }
}
