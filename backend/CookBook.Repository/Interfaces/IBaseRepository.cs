using CookBook.Models;

namespace CookBook.Repository
{
    public interface IBaseRepository<TEntity> where TEntity : Entity
    {
        Task Create(TEntity obj);
        Task Delete(string id);
        Task<List<TEntity>> Get();
        Task<TEntity> Get(string id);
        Task Update(TEntity obj);
    }
}