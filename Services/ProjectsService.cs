using KgoDevBackend.Models;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MongoDB.Bson.IO;
using MongoDB.Driver;
using MongoDB.Driver.Linq;

namespace KgoDevBackend.Services
{
    public class ProjectsService
    {
        private readonly IMongoCollection<Project> _projectsCollection;
        public ProjectsService(IOptions<PortfolioDatabaseSettings> portfolioDatabaseSettings)
        {
            
            MongoClientSettings settings = MongoClientSettings.FromConnectionString(portfolioDatabaseSettings.Value.ConnectionString);
            
            settings.LinqProvider = LinqProvider.V3;

            //var mongoClient = new MongoClient(portfolioDatabaseSettings.Value.ConnectionString);
            var mongoClient = new MongoClient(settings);
            
            var mongoDatabase = mongoClient.GetDatabase(
                portfolioDatabaseSettings.Value.DatabaseName);

            _projectsCollection = mongoDatabase.GetCollection<Project>(
                portfolioDatabaseSettings.Value.ProjectsCollectionName);

        }

        public async Task<List<Project>> GetAsync() =>
            await _projectsCollection.Find(_ => true).ToListAsync();

        public async Task<Project?> GetAsync(string id) =>
            await _projectsCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        //public async Task<Project?> GetAsync(string filterType, string filterLang) {
           

        //    var query = await from project 
        //               in _projectsCollection.AsQueryable<Project>()
        //               where project.Type == filterType
        //               select project).ToList();
       
        //    }
            
          

        public async Task CreateAsync(Project newProject) =>
            await _projectsCollection.InsertOneAsync(newProject);

        public async Task UpdateAsync(string id, Project updatedProject) =>
            await _projectsCollection.ReplaceOneAsync(x=> x.Id == id, updatedProject);

        public async Task RemoveAsync(string id) =>
            await _projectsCollection.DeleteOneAsync(x=> x.Id == id);
    }
}
