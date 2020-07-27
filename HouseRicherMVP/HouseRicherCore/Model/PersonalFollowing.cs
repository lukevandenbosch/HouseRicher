using System;
using System.Collections.Generic;

namespace HouseRicherCore.Model
{
    public partial class PersonalFollowing
    {
        public long Id { get; set; }
        public long? FollowerId { get; set; }
        public long? FollowingId { get; set; }
        public DateTimeOffset? DateFollowed { get; set; }
    }
}
