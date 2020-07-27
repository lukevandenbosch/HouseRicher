using System;

namespace HouseRicherCore.Model
{
    public partial class LegalAcceptedTerms
    {
        public long Id { get; set; }
        public string DocumentName { get; set; }
        public long? PersonId { get; set; }
        public byte? IsAccepted { get; set; }
        public DateTimeOffset? DateAccepted { get; set; }
    }
}
