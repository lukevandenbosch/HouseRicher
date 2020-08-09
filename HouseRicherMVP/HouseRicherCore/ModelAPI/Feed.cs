using System;
using System.Collections;

namespace HouseRicherCore.ModelAPI
{
    public class FeedList {
        public int Count { get; set; }
        public int RangeMin { get; set; }
        public int RangeMax { get; set; }
        public Feed[] Feed { get; set; }
    }
    public class Feed
    {
        public long Id { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
        public int? Likes { get; set; }
        public bool IsLiked { get; set; }
        public DateTimeOffset? DatePosted { get; set; }
        public long PersonId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ProfilePicture { get; set; }
        public int? CommentCount { get; set; }
    }
    public class Comment
    {
        public long Id { get; set; }
        public string Message { get; set; }
        public int? Likes { get; set; }
        public bool IsLiked { get; set; }
        public DateTimeOffset? DatePosted { get; set; }
        public long PersonId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ProfilePicture { get; set; }
    }
}
