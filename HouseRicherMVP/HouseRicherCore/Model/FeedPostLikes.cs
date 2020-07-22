using System;
using System.Collections.Generic;

namespace HouseRicherCore.Model
{
    public partial class FeedPostLikes
    {
        public long Id { get; set; }
        public long? PersonId { get; set; }
        public long? PostId { get; set; }
    }
}
