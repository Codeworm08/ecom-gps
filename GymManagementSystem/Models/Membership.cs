using System;
using System.Collections.Generic;

namespace GymManagementSystem.Models;

public partial class Membership
{
    public int MembershipId { get; set; }

    public string MembershipType { get; set; } = null!;

    public int Duration { get; set; }

    public decimal Price { get; set; }

    public virtual ICollection<MemberMembership> MemberMemberships { get; set; } = new List<MemberMembership>();
}
