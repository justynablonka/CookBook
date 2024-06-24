using CookBook.Models;
using MongoDB.Bson;
using MongoDB.Driver;

namespace CookBook.Repository
{
    public class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : Entity
    {
        private readonly IMongoDbContext _mongoContext;
        private IMongoCollection<TEntity> _dbCollection;

        public BaseRepository(IMongoDbContext context)
        {
            _mongoContext = context;
            _dbCollection = _mongoContext.GetCollection<TEntity>(typeof(TEntity).Name);
        }

        public async Task Create(TEntity obj)
        {
            if (obj == null)
            {
                throw new ArgumentNullException(typeof(TEntity).Name + " object is null");
            }

            await _dbCollection.InsertOneAsync(obj);
        }

        public async Task Delete(string id)
        {
            var objId = new ObjectId(id);

            await _dbCollection.DeleteOneAsync(Builders<TEntity>.Filter.Eq("_id", objId));
        }

        public async Task<TEntity> Get(string id)
        {
            var objId = new ObjectId(id);

            FilterDefinition<TEntity> filter = Builders<TEntity>.Filter.Eq("_id", objId);

            return await _dbCollection.FindAsync(filter).Result.FirstOrDefaultAsync();
        }

        public async Task<List<TEntity>> Get()
        {
            var all = await _dbCollection.FindAsync(Builders<TEntity>.Filter.Empty);

            return await all.ToListAsync();
        }

        public async Task Update(TEntity obj)
        {
            await _dbCollection.ReplaceOneAsync(Builders<TEntity>.Filter.Eq("_id", obj.Id), obj);
        }
    }
}
