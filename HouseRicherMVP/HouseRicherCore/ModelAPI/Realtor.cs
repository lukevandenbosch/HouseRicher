namespace HouseRicherCore.ModelAPI
{
    public class Realtor
    {
        public long Id { get; set; }
        public bool IsRealtor { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ProfilePicture { get; set; }
        public string City { get; set; }
        public string ProvinceState { get; set; }
        public bool Followed { get; set; }
    }
}
