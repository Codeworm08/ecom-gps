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
    public class MemberMembershipsController : ControllerBase
    {
        private readonly GymManagementSystemContext _context;

        public MemberMembershipsController(GymManagementSystemContext context)
        {
            _context = context;
        }

        // GET: api/MemberMemberships
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MemberMembership>>> GetMemberMemberships()
        {
            return await _context.MemberMemberships.ToListAsync();
        }

        // GET: api/MemberMemberships/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MemberMembership>> GetMemberMembership(int id)
        {
            var memberMembership = await _context.MemberMemberships.FindAsync(id);

            if (memberMembership == null)
            {
                return NotFound();
            }

            return memberMembership;
        }

        // PUT: api/MemberMemberships/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMemberMembership(int id, MemberMembership memberMembership)
        {
            if (id != memberMembership.MemberMembershipId)
            {
                return BadRequest();
            }

            _context.Entry(memberMembership).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MemberMembershipExists(id))
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

        // POST: api/MemberMemberships
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MemberMembership>> PostMemberMembership(MemberMembership memberMembership)
        {
            _context.MemberMemberships.Add(memberMembership);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMemberMembership", new { id = memberMembership.MemberMembershipId }, memberMembership);
        }

        // DELETE: api/MemberMemberships/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMemberMembership(int id)
        {
            var memberMembership = await _context.MemberMemberships.FindAsync(id);
            if (memberMembership == null)
            {
                return NotFound();
            }

            _context.MemberMemberships.Remove(memberMembership);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MemberMembershipExists(int id)
        {
            return _context.MemberMemberships.Any(e => e.MemberMembershipId == id);
        }
    }
}
