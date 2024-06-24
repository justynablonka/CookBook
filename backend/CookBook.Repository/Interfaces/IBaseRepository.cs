using CookBook.Models;
using MongoDB.Bson;

namespace CookBook.Repository
{
    public interface IBaseRepository<TEntity> where TEntity : Entity
    {
        Task Create(TEntity obj);
        Task Delete(ObjectId id);
        Task<List<TEntity>> Get();
        Task<TEntity> Get(ObjectId id);
        Task Update(TEntity obj);
    }
}