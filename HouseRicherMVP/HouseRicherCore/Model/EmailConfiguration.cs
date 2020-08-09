using System;
using System.Collections.Generic;

namespace HouseRicherCore.Model
{
    public partial class EmailConfiguration
    {
        public long Id { get; set; }
        public string SmtpServer { get; set; }
        public int Port { get; set; }
    }
}
