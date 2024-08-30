using System;
using System.Collections.Generic;

namespace GymManagementSystem.Models;

public partial class MemberMembership
{
    public int MemberMembershipId { get; set; }

    public int? MemberId { get; set; }

    public int? MembershipId { get; set; }

    public DateOnly StartDate { get; set; }

    public DateOnly EndDate { get; set; }

    public virtual Member? Member { get; set; }

    public virtual Membership? Membership { get; set; }
}
