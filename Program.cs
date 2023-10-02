using KgoDevBackend.Models;
using KgoDevBackend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;

namespace PortfolioWebsiteKgoDev
{
    public class Program
    {
        public static void Main(string[] args)
        {
           


            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.Configure<PortfolioDatabaseSettings>(
                builder.Configuration.GetSection("PortfolioDatabase"));
            builder.Services.AddSingleton<ProjectsService>();
            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
   
    //EfCore project model
    //public class Project
    //{
    //    public int Id { get; set; }
    //    public string Name { get; set; } = null!;
    //    public string Type { get; set; } = null!;
    //    public string Language { get; set; } = null!;
    //    public string Description { get; set; } = null!;
    //    public string Photo { get; set; } = null!;
    //    public string Link { get; set; } = null!;
    //}

    //SQL DatabaseContext
    //public class ProjectDbContext : Microsoft.EntityFrameworkCore.DbContext
    //{
    //    public ProjectDbContext(DbContextOptions<ProjectDbContext> options)
    //        : base(options)
    //    {
    //    }

    //    public Microsoft.EntityFrameworkCore.DbSet<Project> Projects { get; set; }
    //}
}