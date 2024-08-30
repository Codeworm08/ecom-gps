using System;
using System.Collections.Generic;

namespace GymManagementSystem.Models;

public partial class Equipment
{
    public int EquipmentId { get; set; }

    public string EquipmentName { get; set; } = null!;

    public string? Description { get; set; }

    public DateOnly? PurchaseDate { get; set; }

    public DateOnly? LastMaintenanceDate { get; set; }
}
