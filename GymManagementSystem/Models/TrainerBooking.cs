using System;
using System.Collections.Generic;

namespace GymManagementSystem.Models;

public partial class TrainerBooking
{
    public int BookingId { get; set; }

    public int? MemberId { get; set; }

    public int? TrainerId { get; set; }

    public int DayOfWeek { get; set; }

    public TimeOnly StartTime { get; set; }

    public TimeOnly EndTime { get; set; }

    public virtual Member? Member { get; set; }

    public virtual Trainer? Trainer { get; set; }
}
