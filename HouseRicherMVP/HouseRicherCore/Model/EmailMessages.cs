using System;
using System.Collections.Generic;

namespace HouseRicherCore.Model
{
    public partial class EmailMessages
    {
        public long Id { get; set; }
        public string MessageName { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
        public long? EmailId { get; set; }
    }
}
