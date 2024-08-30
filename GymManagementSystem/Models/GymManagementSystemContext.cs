using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace GymManagementSystem.Models;

public partial class GymManagementSystemContext : DbContext
{
    public GymManagementSystemContext()
    {
    }

    public GymManagementSystemContext(DbContextOptions<GymManagementSystemContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Equipment> Equipment { get; set; }

    public virtual DbSet<Member> Members { get; set; }

    public virtual DbSet<MemberMembership> MemberMemberships { get; set; }

    public virtual DbSet<Membership> Memberships { get; set; }

    public virtual DbSet<Trainer> Trainers { get; set; }

    public virtual DbSet<TrainerBooking> TrainerBookings { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("server=XW5CG3415BSG\\SQLEXPRESS;database=GymManagementSystem;trusted_connection=true;TrustServerCertificate=true;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Equipment>(entity =>
        {
            entity.HasKey(e => e.EquipmentId).HasName("PK__Equipmen__34474599A22D673C");

            entity.Property(e => e.EquipmentId).HasColumnName("EquipmentID");
            entity.Property(e => e.EquipmentName).HasMaxLength(100);
        });

        modelBuilder.Entity<Member>(entity =>
        {
            entity.HasKey(e => e.MemberId).HasName("PK__Members__0CF04B38CB315315");

            entity.HasIndex(e => e.Email, "UQ__Members__A9D10534F2056B4A").IsUnique();

            entity.Property(e => e.MemberId).HasColumnName("MemberID");
            entity.Property(e => e.Email).HasMaxLength(100);
            entity.Property(e => e.FirstName).HasMaxLength(50);
            entity.Property(e => e.LastName).HasMaxLength(50);
            entity.Property(e => e.MembershipStatus).HasMaxLength(20);
            entity.Property(e => e.Phone).HasMaxLength(20);
        });

        modelBuilder.Entity<MemberMembership>(entity =>
        {
            entity.HasKey(e => e.MemberMembershipId).HasName("PK__MemberMe__5EAB967F37E7BF77");

            entity.Property(e => e.MemberMembershipId).HasColumnName("MemberMembershipID");
            entity.Property(e => e.MemberId).HasColumnName("MemberID");
            entity.Property(e => e.MembershipId).HasColumnName("MembershipID");

            entity.HasOne(d => d.Member).WithMany(p => p.MemberMemberships)
                .HasForeignKey(d => d.MemberId)
                .HasConstraintName("FK__MemberMem__Membe__4E88ABD4");

            entity.HasOne(d => d.Membership).WithMany(p => p.MemberMemberships)
                .HasForeignKey(d => d.MembershipId)
                .HasConstraintName("FK__MemberMem__Membe__4F7CD00D");
        });

        modelBuilder.Entity<Membership>(entity =>
        {
            entity.HasKey(e => e.MembershipId).HasName("PK__Membersh__92A78599D56D4B93");

            entity.Property(e => e.MembershipId).HasColumnName("MembershipID");
            entity.Property(e => e.MembershipType).HasMaxLength(50);
            entity.Property(e => e.Price).HasColumnType("decimal(10, 2)");
        });

        modelBuilder.Entity<Trainer>(entity =>
        {
            entity.HasKey(e => e.TrainerId).HasName("PK__Trainers__366A1B9CC7013E51");

            entity.HasIndex(e => e.Email, "UQ__Trainers__A9D105340DCAB38E").IsUnique();

            entity.Property(e => e.TrainerId).HasColumnName("TrainerID");
            entity.Property(e => e.Email).HasMaxLength(100);
            entity.Property(e => e.FirstName).HasMaxLength(50);
            entity.Property(e => e.LastName).HasMaxLength(50);
            entity.Property(e => e.Phone).HasMaxLength(20);
            entity.Property(e => e.Specialization).HasMaxLength(100);
        });

        modelBuilder.Entity<TrainerBooking>(entity =>
        {
            entity.HasKey(e => e.BookingId).HasName("PK__TrainerB__73951ACDF1543ECD");

            entity.Property(e => e.BookingId).HasColumnName("BookingID");
            entity.Property(e => e.MemberId).HasColumnName("MemberID");
            entity.Property(e => e.TrainerId).HasColumnName("TrainerID");

            entity.HasOne(d => d.Member).WithMany(p => p.TrainerBookings)
                .HasForeignKey(d => d.MemberId)
                .HasConstraintName("FK__TrainerBo__Membe__5535A963");

            entity.HasOne(d => d.Trainer).WithMany(p => p.TrainerBookings)
                .HasForeignKey(d => d.TrainerId)
                .HasConstraintName("FK__TrainerBo__Train__5629CD9C");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
