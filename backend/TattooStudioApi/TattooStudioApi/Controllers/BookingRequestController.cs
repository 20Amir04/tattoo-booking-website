using Microsoft.AspNetCore.Mvc;
using TattooStudioApi.Models;
using TattooStudioApi.Data;
using TattooStudioApi.DTOs;

namespace TattooStudioApi.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class BookingRequestController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BookingRequestController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromForm] BookingRequestDto dto)
        {
            var bookingRequest = new BookingRequest
            {
                FirstName = dto.FirstName,
                LastName = dto.LastName,
                Email = dto.Email,
                Phone = dto.Phone,
                IsCoverUp = dto.IsCoverUp,
                Instagram = dto.Instagram,
                Description = dto.Description,
                PreferredTime = string.Join(", ", dto.PreferredTime),
                PreferredDays = string.Join(", ", dto.PreferredDays),
                Comments = dto.Comments,
                ReferencePhotos = dto.ReferencePhotos is not null
                ? string.Join(", ", dto.ReferencePhotos.Select(file => file.FileName))
                : string.Empty
            };

            _context.BookingRequests.Add(bookingRequest);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Booking request saved successfully." });
        }
    }
}
