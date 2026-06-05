using Microsoft.AspNetCore.Mvc;
using TattooStudioApi.Models;
using TattooStudioApi.Data;
using TattooStudioApi.DTOs;

namespace TattooStudioApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ConsultationRequestController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ConsultationRequestController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromForm] ConsultationRequestDto dto)
        {
            var consultationRequest = new ConsultationRequest
            {
                FullName = dto.FullName,
                Phone = dto.Phone,
                Email = dto.Email,
                Idea = dto.Idea,
                ReferenceFilePath = dto.ReferenceFile?.FileName ?? string.Empty
            };

            _context.ConsultationRequest.Add(consultationRequest);

            await _context.SaveChangesAsync();

            return Ok(new { message = "Consultation request saved successfully." });
        }
    }
}
