using Microsoft.AspNetCore.Http;

namespace TattooStudioApi.DTOs
{
    public class ConsultationRequestDto
    {
        public string FullName { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Idea { get; set; } = string.Empty;

        public IFormFile? ReferenceFile { get; set; }
    }
}
