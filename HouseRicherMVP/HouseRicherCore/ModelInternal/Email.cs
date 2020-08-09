namespace HouseRicherCore.ModelInternal {
    public class Email {
        public long Id { get; set; }
        public string To { get; set; }
        public string From { get; set; }
        public string Password { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
        public string SMPTServer { get; set; }
        public int Port { get; set; }
    }
}