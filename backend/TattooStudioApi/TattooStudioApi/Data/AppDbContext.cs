using Microsoft.EntityFrameworkCore;
using TattooStudioApi.Models;

namespace TattooStudioApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) 
        {
        }

        public DbSet<BookingRequest> BookingRequests => Set<BookingRequest>();
        public DbSet<ConsultationRequest> ConsultationRequest => Set<ConsultationRequest>();
        public DbSet<ContactRequest> ContactRequest => Set<ContactRequest>();
    }
}
