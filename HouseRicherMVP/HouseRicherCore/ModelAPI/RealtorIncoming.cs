using Microsoft.AspNetCore.Http;

namespace HouseRicherCore.ModelAPI
{
    public class RealtorIncoming
    {
        public IFormFile ProfilePicture { get; set; }
        public string FileType { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string PhoneNumberOffice { get; set; }
        public string PhoneNumberCell { get; set; }
        public string Website { get; set; }
        public string Facebook { get; set; }
        public string Linkedin { get; set; }
        public string Twitter { get; set; }
        public string Instagram { get; set; }
        public string About { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string ProvinceState { get; set; }
    }
}
