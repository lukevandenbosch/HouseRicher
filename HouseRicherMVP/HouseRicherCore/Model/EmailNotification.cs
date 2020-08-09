using System;
using System.Collections.Generic;

namespace HouseRicherCore.Model
{
    public partial class EmailNotification
    {
        public long Id { get; set; }
        public string Email { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
        public byte IsSent { get; set; }
        public string ExceptionMessage { get; set; }
        public long? MessageId { get; set; }
        public long? PersonId { get; set; }
        public DateTimeOffset? DateSent { get; set; }
    }
}
