using System;
using System.Collections.Generic;

namespace HouseRicherCore.Model
{
    public partial class FeedPost
    {
        public long Id { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
        public DateTimeOffset? DatePosted { get; set; }
        public long? PersonId { get; set; }
    }
}
