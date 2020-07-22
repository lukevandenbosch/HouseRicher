using System;
using System.Collections.Generic;

namespace HouseRicherCore.Model
{
    public partial class FeedCommentLikes
    {
        public long Id { get; set; }
        public long? PersonId { get; set; }
        public long? CommentId { get; set; }
    }
}
