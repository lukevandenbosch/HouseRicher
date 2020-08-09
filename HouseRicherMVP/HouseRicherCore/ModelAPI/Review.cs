using System;
using System.Collections.Generic;

namespace HouseRicherCore.ModelAPI
{
    public class Reviews 
    {
        public int rating { get; set; }
        public int total { get; set; }
        public IEnumerable<Review> reviews { get; set; }
    }
    public class Review
    {
        public long Id { get; set; }
        public string ReviewMessage { get; set; }
        public int? Rating { get; set; }
        public long PersonId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ProfilePicture { get; set; }
        public DateTimeOffset? DatePosted { get; set; }
    }
}
