namespace KgoDevBackend.Models
{
    public class PortfolioDatabaseSettings
    {
        //Model class for MongoDb database config
        public string ConnectionString { get; set; } = null!;
        public string DatabaseName { get; set; } = null!;
        public string ProjectsCollectionName { get; set; } = null!;
    }
}
