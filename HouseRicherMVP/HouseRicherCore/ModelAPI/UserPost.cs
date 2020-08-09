using System;

namespace HouseRicherCore.ModelAPI
{
    public class UserPost
    {
        public long Id { get; set; }
        public string Type { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
        public DateTimeOffset? DatePosted { get; set; }
    }
}
