using CookBook.Models;

namespace CookBook.Services {
    public interface IIngredientService {
        Task<Dictionary<string, List<Ingredient>>> GetAllIngredients();
    }
}