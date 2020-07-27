using System;
using System.Collections.Generic;

namespace HouseRicherCore.Model
{
    public partial class FeedNotifications
    {
        public long Id { get; set; }
        public long? PersonId { get; set; }
        public DateTimeOffset? DatePosted { get; set; }
        public byte? IsRead { get; set; }
        public long? ReviewId { get; set; }
        public long? VisitsPersonalId { get; set; }
        public long? PostId { get; set; }
        public long? CommentId { get; set; }
        public long? PostLikesId { get; set; }
        public long? CommentLikesId { get; set; }
    }
}
