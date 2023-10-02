using KgoDevBackend.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson.IO;
using MongoDB.Driver;

namespace KgoDevBackend.Services
{
    public class ProjectsService
    {
        private readonly IMongoCollection<Project> _projectsCollection;
        public ProjectsService(
            IOptions<PortfolioDatabaseSettings> portfolioDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                portfolioDatabaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(
                portfolioDatabaseSettings.Value.DatabaseName);

            _projectsCollection = mongoDatabase.GetCollection<Project>(
                portfolioDatabaseSettings.Value.ProjectsCollectionName);

        }

        public async Task<List<Project>> GetAsync() =>
            await _projectsCollection.Find(_ => true).ToListAsync();
        public async Task<Project?> GetAsync(string id) =>
            await _projectsCollection.Find(x=> x.Id == id).FirstOrDefaultAsync();
        public async Task CreateAsync(Project newProject) =>
            await _projectsCollection.InsertOneAsync(newProject);
        public async Task UpdateAsync(string id, Project updatedProject) =>
            await _projectsCollection.ReplaceOneAsync(x=> x.Id == id, updatedProject);
        public async Task RemoveAsync(string id) =>
            await _projectsCollection.DeleteOneAsync(x=> x.Id == id);
    }
}
