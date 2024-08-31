using GymManagementSystem.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<GymManagementSystemContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("GymManagementSystemContext")));
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddControllers().AddJsonOptions(

    options => {
        { options.JsonSerializerOptions.PropertyNamingPolicy = null; }
        { options.JsonSerializerOptions.DictionaryKeyPolicy = null; }
    }

);
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddCors();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(options => { options.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader(); });
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
