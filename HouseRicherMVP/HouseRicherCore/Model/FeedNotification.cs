using System;
using System.Collections.Generic;

namespace HouseRicherCore.Model
{
    public partial class FeedNotification
    {
        public long Id { get; set; }
        public string NotificationType { get; set; }
        public long? ToPersonId { get; set; }
        public long? FromPersonId { get; set; }
        public byte? IsRead { get; set; }
        public long? SiteId { get; set; }
        public DateTimeOffset? DatePosted { get; set; }
    }
}
