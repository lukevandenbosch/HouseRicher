using System;
using System.Collections.Generic;

namespace HouseRicherCore.Model
{
    public partial class PersonalReviews
    {
        public long Id { get; set; }
        public string ReviewMessage { get; set; }
        public int? Rating { get; set; }
        public long PersonId { get; set; }
        public long RealtorId { get; set; }
        public DateTimeOffset? DatePosted { get; set; }
    }
}
