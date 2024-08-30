CREATE DATABASE GymManagementSystem;

USE GymManagementSystem;

CREATE TABLE Members (
    MemberID INT PRIMARY KEY IDENTITY(1,1),
    FirstName NVARCHAR(50) NOT NULL,
    LastName NVARCHAR(50) NOT NULL,
    Email NVARCHAR(100) UNIQUE NOT NULL,
    Phone NVARCHAR(20),
    DateOfBirth DATE,
    JoinDate DATE NOT NULL,
    MembershipStatus NVARCHAR(20) NOT NULL
);

CREATE TABLE Memberships (
    MembershipID INT PRIMARY KEY IDENTITY(1,1),
    MembershipType NVARCHAR(50) NOT NULL,
    Duration INT NOT NULL,
    Price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE MemberMemberships (
    MemberMembershipID INT PRIMARY KEY IDENTITY(1,1),
    MemberID INT FOREIGN KEY REFERENCES Members(MemberID),
    MembershipID INT FOREIGN KEY REFERENCES Memberships(MembershipID),
    StartDate DATE NOT NULL,
    EndDate DATE NOT NULL
);


CREATE TABLE Trainers (
    TrainerID INT PRIMARY KEY IDENTITY(1,1),
    FirstName NVARCHAR(50) NOT NULL,
    LastName NVARCHAR(50) NOT NULL,
    Email NVARCHAR(100) UNIQUE NOT NULL,
    Phone NVARCHAR(20),
    Specialization NVARCHAR(100)
);

--CREATE TABLE Classes (
--    ClassID INT PRIMARY KEY IDENTITY(1,1),
--    ClassName NVARCHAR(100) NOT NULL,
--    Description NVARCHAR(MAX),
--    TrainerID INT FOREIGN KEY REFERENCES Trainers(TrainerID),
--    Capacity INT NOT NULL,
--    Duration INT NOT NULL -- in minutes
--);

--CREATE TABLE ClassSchedule (
--    ScheduleID INT PRIMARY KEY IDENTITY(1,1),
--	MemberID INT FOREIGN KEY REFERENCES Members(MemberID),
--	TrainerID INT FOREIGN KEY REFERENCES Trainers(TrainerID),
--    --ClassID INT FOREIGN KEY REFERENCES Classes(ClassID),
--    DayOfWeek INT NOT NULL, -- 1 = Sunday, 2 = Monday, etc.
--    StartTime TIME NOT NULL,
--    EndTime TIME NOT NULL
--);


CREATE TABLE TrainerBookings (
    BookingID INT PRIMARY KEY IDENTITY(1,1),
    MemberID INT FOREIGN KEY REFERENCES Members(MemberID),
	TrainerID INT FOREIGN KEY REFERENCES Trainers(TrainerID),
    --ScheduleID INT FOREIGN KEY REFERENCES ClassSchedule(ScheduleID),
	DayOfWeek INT NOT NULL, -- 1 = Sunday, 2 = Monday, etc.
    StartTime TIME NOT NULL,
    EndTime TIME NOT NULL
    --BookingDate DATE NOT NULL
);


CREATE TABLE Equipment (
    EquipmentID INT PRIMARY KEY IDENTITY(1,1),
    EquipmentName NVARCHAR(100) NOT NULL,
    Description NVARCHAR(MAX),
    PurchaseDate DATE,
    LastMaintenanceDate DATE
);
