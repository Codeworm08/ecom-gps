using System;
using System.Collections.Generic;

namespace GymManagementSystem.Models;

public partial class Member
{
    public int MemberId { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string? Phone { get; set; }

    public DateOnly? DateOfBirth { get; set; }

    public DateOnly JoinDate { get; set; }

    public string MembershipStatus { get; set; } = null!;

    public virtual ICollection<MemberMembership> MemberMemberships { get; set; } = new List<MemberMembership>();

    public virtual ICollection<TrainerBooking> TrainerBookings { get; set; } = new List<TrainerBooking>();
}
