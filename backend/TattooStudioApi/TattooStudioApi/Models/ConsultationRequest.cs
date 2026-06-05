namespace TattooStudioApi.Models
{
    public class ConsultationRequest
    {
        public int Id { get; set; }

        public string FullName { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Idea { get; set; } = string.Empty;

        public string ReferenceFilePath { get; set; } = string.Empty;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    }
}
