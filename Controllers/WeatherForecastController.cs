using Microsoft.AspNetCore.Mvc;
using System.Data.Entity;

namespace PortfolioWebsiteKgoDev.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public  IEnumerable<WeatherForecast> Get(ProjectDbContext context)
        {
            Project proj1 = new Project();

           // proj1.Id = 1;
            proj1.Name = "Proj1";
            proj1.Type = "WebApp";
            proj1.Language = "CSharp";
            proj1.Description="a project";
            context.Projects.Add(proj1);
            context.SaveChanges();
            var projs = context.Projects.ToList<Project>();
            Console.WriteLine(projs.First<Project>().Name);
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
              


        }
    }
}