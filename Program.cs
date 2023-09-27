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

            builder.Services.AddControllersWithViews();

            
            MongoClient client = new MongoClient("mongodb+srv://kyleAdmin:Gl3gEZOdddSyczyF@cluster0.o2rr9z9.mongodb.net/?retryWrites=true&w=majority");

            List<string> databases = client.ListDatabaseNames().ToList();

            foreach (string database in databases) 
            {
                Console.WriteLine(database);
            }
            var projectCollection = client.GetDatabase("kgodev").GetCollection<Project>("projects");
            Project proj1 = new Project();
            proj1.Name = "proj2";
            proj1.Type = "WebApp";
            proj1.Language = "CSharp";
            proj1.Description = "second proj";
            proj1.Photo = "photolink2";
            proj1.Link = "link link 2";
            projectCollection.InsertOne(proj1);

            FilterDefinition<Project> filter = Builders<Project>.Filter.Eq("name", "proj2");

            List<Project> results = projectCollection.Find(filter).ToList();
            foreach(Project result in results)
            {
                Console.WriteLine(result);
            }

            //UpdateDefinition<Project> update = Builders<Project>.Update.AddToSet<string>("language", "Java");
           // projectCollection.UpdateOne(filter, update);
            //results =projectCollection.Find(filter).ToList();

            //projectCollection.DeleteOne(filter);
            
            //SQL server DB Config: 
            //var connection = String.Empty;
            //if (builder.Environment.IsDevelopment())
            //{
            //    builder.Configuration.AddEnvironmentVariables().AddJsonFile("appsettings.Development.json");
            //    connection = builder.Configuration.GetConnectionString("AZURE_SQL_CONNECTIONSTRING");
            //}
            //else
            //{
            //    connection = Environment.GetEnvironmentVariable("AZURE_SQL_CONNECTIONSTRING");
            //}

            //builder.Services.AddDbContext<ProjectDbContext>(options =>
            //    options.UseSqlServer(connection));

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

     //       app.MapPost("/Project", (Project project, ProjectDbContext context) =>
     //       {
     //           context.Add(project);
     //           context.SaveChanges();
     //       })
     //       .WithName("CreateProject");
     ////.WithOpenApi();
     //       app.Run();
        }
    }
    public class Project
    {
        public ObjectId _id { get; set; }
        [BsonElement("name")]
        public string Name { get; set; } = null!;
        [BsonElement("type")]
        public string Type { get; set; } = null!;
        [BsonElement("language")]
        public string Language { get; set; } = null!;
        [BsonElement("description")]
        public string Description { get; set; } = null!;
        [BsonElement("photo")]
        public string Photo { get; set; } = null!;
        [BsonElement("link")]
        public string Link { get; set; } = null!;
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