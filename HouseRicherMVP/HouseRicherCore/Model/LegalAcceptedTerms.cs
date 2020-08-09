using System;
using System.Collections.Generic;

namespace HouseRicherCore.Model
{
    public partial class LegalAcceptedTerms
    {
        public long Id { get; set; }
        public string DocumentName { get; set; }
        public long? PersonId { get; set; }
        public long? PostId { get; set; }
        public long? CommentId { get; set; }
        public byte? IsAccepted { get; set; }
        public DateTimeOffset? DateAccepted { get; set; }
    }
}
