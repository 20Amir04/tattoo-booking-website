using Microsoft.AspNetCore.Http;

namespace TattooStudioApi.DTOs
{
    public class BookingRequestDto
    {
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;

        public string IsCoverUp { get; set; } = string.Empty;
        public string Instagram { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;

        public List<string> PreferredTime { get; set; } = [];
        public List<string> PreferredDays { get; set; } = [];

        public string Comments { get; set; } = string.Empty;

        public List<IFormFile>? ReferencePhotos {  get; set; }
    }
}
