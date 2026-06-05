namespace TattooStudioApi.Models
{
    public class BookingRequest
    {
        public int Id { get; set; }

        public string FirstName { get; set; } =string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;

        public string IsCoverUp { get; set; } = string.Empty;
        public string Instagram { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;

        public string PreferredTime { get; set; } = string.Empty;
        public string PreferredDays { get; set; } = string.Empty;

        public string Comments { get; set; } = string.Empty;

        public string ReferencePhotos {  get; set; } = string.Empty;

        public DateTime CreatedAt {  get; set; } = DateTime.UtcNow;
    }
}
