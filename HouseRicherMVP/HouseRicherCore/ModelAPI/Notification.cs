namespace HouseRicherCore.ModelAPI
{
    public class Notification
    {
        public long Id { get; set; }
        public string Type { get; set; }
        public bool IsRead { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ProfilePicture { get; set; }
        public long? SiteId { get; set; }
    }
}