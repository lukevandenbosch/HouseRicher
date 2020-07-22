using System;
using System.Collections.Generic;

namespace HouseRicherCore.Model
{
    public partial class FeedComment
    {
        public long Id { get; set; }
        public string Message { get; set; }
        public DateTimeOffset? DatePosted { get; set; }
        public long? PostId { get; set; }
        public long? PersonId { get; set; }
    }
}
