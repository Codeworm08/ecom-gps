create database EComDb
use EComDb

create table Category
(CId int identity primary key,
CName nvarchar(100) unique not null)

create table Seller
(SId int identity primary key,
SName nvarchar(100) unique not null)

create table Users
(UId int identity primary key,
UName nvarchar(100) not null,
UPass nvarchar(50) not null
)

create table Product
(PId int identity primary key,
Pname nvarchar(100) not null,
CId int foreign key references Category(CId),
SId int foreign key references Seller(SId),
AQty int,
Price float)

create table Orders
(OId int identity primary key,
UId int foreign key references Users(UId),
PId int foreign key references Product(PId),
Qty int,
SId int foreign key references Seller(SId))