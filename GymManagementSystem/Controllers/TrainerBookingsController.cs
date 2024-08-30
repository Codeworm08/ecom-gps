using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GymManagementSystem.Models;

namespace GymManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrainerBookingsController : ControllerBase
    {
        private readonly GymManagementSystemContext _context;

        public TrainerBookingsController(GymManagementSystemContext context)
        {
            _context = context;
        }

        // GET: api/TrainerBookings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TrainerBooking>>> GetTrainerBookings()
        {
            return await _context.TrainerBookings.ToListAsync();
        }

        // GET: api/TrainerBookings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TrainerBooking>> GetTrainerBooking(int id)
        {
            var trainerBooking = await _context.TrainerBookings.FindAsync(id);

            if (trainerBooking == null)
            {
                return NotFound();
            }

            return trainerBooking;
        }

        // PUT: api/TrainerBookings/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTrainerBooking(int id, TrainerBooking trainerBooking)
        {
            if (id != trainerBooking.BookingId)
            {
                return BadRequest();
            }

            _context.Entry(trainerBooking).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TrainerBookingExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TrainerBookings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TrainerBooking>> PostTrainerBooking(TrainerBooking trainerBooking)
        {
            _context.TrainerBookings.Add(trainerBooking);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTrainerBooking", new { id = trainerBooking.BookingId }, trainerBooking);
        }

        // DELETE: api/TrainerBookings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTrainerBooking(int id)
        {
            var trainerBooking = await _context.TrainerBookings.FindAsync(id);
            if (trainerBooking == null)
            {
                return NotFound();
            }

            _context.TrainerBookings.Remove(trainerBooking);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TrainerBookingExists(int id)
        {
            return _context.TrainerBookings.Any(e => e.BookingId == id);
        }
    }
}
