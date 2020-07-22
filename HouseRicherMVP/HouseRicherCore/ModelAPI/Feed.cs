using System;
using System.Collections.Generic;

namespace HouseRicherCore.ModelAPI
{
    public class Feed
    {
        public long Id { get; set; }
        public string Message { get; set; }
        public int? Likes { get; set; }
        public bool IsLiked { get; set; }
        public DateTimeOffset? DatePosted { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Description { get; set; }
        public IEnumerable<Comment> Comments { get; set; }
    }
    public class Comment
    {
        public long Id { get; set; }
        public string Message { get; set; }
        public int? Likes { get; set; }
        public bool IsLiked { get; set; }
        public DateTimeOffset? DatePosted { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Description { get; set; }
    }
}
