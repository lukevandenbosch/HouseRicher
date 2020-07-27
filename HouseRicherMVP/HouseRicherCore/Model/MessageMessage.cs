using System;
using System.Collections.Generic;

namespace HouseRicherCore.Model
{
    public partial class MessageMessage
    {
        public long Id { get; set; }
        public string Message { get; set; }
        public long? ConversationId { get; set; }
        public DateTimeOffset? DatePosted { get; set; }
    }
}
