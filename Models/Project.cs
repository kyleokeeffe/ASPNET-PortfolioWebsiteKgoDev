using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace KgoDevBackend.Models
{
    public class Project
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]

        public string? Id { get; set; }
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
}
