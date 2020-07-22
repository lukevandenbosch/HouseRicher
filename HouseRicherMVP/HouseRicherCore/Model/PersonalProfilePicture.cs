using System;
using System.Collections.Generic;

namespace HouseRicherCore.Model
{
    public partial class PersonalProfilePicture
    {
        public long Id { get; set; }
        public string ProfilePicture { get; set; }
        public string FileType { get; set; }
        public long? PersonId { get; set; }
    }
}
