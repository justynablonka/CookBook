using MongoDB.Driver;

namespace CookBook.Repository
{
    public interface IMongoDbContext
    {
        IMongoCollection<T> GetCollection<T>(string name);
    }
}
