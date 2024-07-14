using CookBook.Models;
using CookBook.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CookBook.Services {
    public class IngredientService : IIngredientService {

        private readonly IBaseRepository<Recipe> _recipeRepository;
        public IngredientService(IBaseRepository<Recipe> recipeRepository) {
            _recipeRepository = recipeRepository;
        }

        public async Task<Dictionary<string, List<Ingredient>>> GetAllIngredients() {
            var result = new Dictionary<string, List<Ingredient>>();
            var recipes = await _recipeRepository.Get();
            foreach (var recipe in recipes) {
                foreach (var ingredient in recipe.Ingredients) {
                    if (result.ContainsKey(ingredient.Name)) {
                        result[ingredient.Name].Add(ingredient);
                    } else {
                        result[ingredient.Name] = new List<Ingredient> { ingredient };
                    }
                }
            }
            return result;
        }
    }
}
