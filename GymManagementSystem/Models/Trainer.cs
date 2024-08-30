using System;
using System.Collections.Generic;

namespace GymManagementSystem.Models;

public partial class Trainer
{
    public int TrainerId { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string? Phone { get; set; }

    public string? Specialization { get; set; }

    public virtual ICollection<TrainerBooking> TrainerBookings { get; set; } = new List<TrainerBooking>();
}
