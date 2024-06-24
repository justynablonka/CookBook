using CookBook.Models;
using CookBook.Repository;
using Microsoft.AspNetCore.Mvc;

namespace CookBook.API.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase {
        private readonly IBaseRepository<Recipe> _recipeRepository;

        public RecipeController(IBaseRepository<Recipe> recipeRepository) {
            _recipeRepository = recipeRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<Recipe>>> Get() {
            return await _recipeRepository.Get();
        }

        [HttpGet("{id}", Name = "GetRecipe")]
        public async Task<ActionResult<Recipe>> Get(string id) {
            var recipe = await _recipeRepository.Get(id);

            if (recipe == null)
            {
                return NotFound();
            }

            return recipe;
        }

        [HttpPost]
        public async Task<ActionResult<Recipe>> Create(Recipe recipe) {
            await _recipeRepository.Create(recipe);

            return CreatedAtRoute("GetRecipe", new { id = recipe.Id.ToString() }, recipe);
        }

        [HttpDelete("{id}", Name = "DeleteRecipe")]
        public async Task<ActionResult<Recipe>> Delete(string id) {
            var recipe = await _recipeRepository.Get(id);

            if (recipe == null)
            {
                return NotFound();
            }

            await _recipeRepository.Delete(id);

            return recipe;
        }
    }
}
