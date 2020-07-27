using System;
using System.Collections.Generic;

namespace HouseRicherCore.Model
{
    public partial class MessageConversation
    {
        public long Id { get; set; }
        public long? OpeningPersonId { get; set; }
        public long? OtherPersonId { get; set; }
        public DateTimeOffset? OpeningDate { get; set; }
    }
}
