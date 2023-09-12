using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace PortfolioWebsiteKgoDev
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllersWithViews();
            var connection = String.Empty;
            if (builder.Environment.IsDevelopment())
            {
                builder.Configuration.AddEnvironmentVariables().AddJsonFile("appsettings.Development.json");
                connection = builder.Configuration.GetConnectionString("AZURE_SQL_CONNECTIONSTRING");
            }
            else
            {
                connection = Environment.GetEnvironmentVariable("AZURE_SQL_CONNECTIONSTRING");
            }

            builder.Services.AddDbContext<ProjectDbContext>(options =>
                options.UseSqlServer(connection));

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();


            app.MapControllerRoute(
                name: "default",
                pattern: "{controller}/{action=Index}/{id?}");

            app.MapFallbackToFile("index.html");

//            app.MapGet("/Project", (ProjectDbContext context) =>
//            {
//                return Context.Projects.ToList();
//            })
//.WithName("GetProjects");
            //.WithOpenApi();

            app.MapPost("/Project", (Project project, ProjectDbContext context) =>
            {
                context.Add(project);
                context.SaveChanges();
            })
            .WithName("CreateProject");
     //.WithOpenApi();
            app.Run();
        }
    }
    public class Project
    {
     

   

        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Language { get; set; }
        public string Description { get; set; }


    }
    public class ProjectDbContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public ProjectDbContext(DbContextOptions<ProjectDbContext> options)
            : base(options)
        {
        }

        public Microsoft.EntityFrameworkCore.DbSet<Project> Projects { get; set; }
    }
}