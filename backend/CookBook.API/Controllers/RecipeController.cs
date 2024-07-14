using CookBook.Models;
using CookBook.Repository;
using CookBook.Services;
using Microsoft.AspNetCore.Mvc;

namespace CookBook.API.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase {
        private readonly IBaseRepository<Recipe> _recipeRepository;
        private readonly IRecipeService _recipeService;

        private static readonly string imageLocation = "C:/cookBookImages";

        public RecipeController(IBaseRepository<Recipe> recipeRepository, IRecipeService recipeService) {
            _recipeRepository = recipeRepository;
            _recipeService = recipeService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Recipe>>> Get() {
            return await _recipeRepository.Get();
        }

        [HttpGet("{id}", Name = "GetRecipe")]
        public async Task<ActionResult<Recipe>> Get(string id) {
            var recipe = await _recipeRepository.Get(id);

            if (recipe == null) {
                return NotFound();
            }

            return recipe;
        }

        [HttpPost]
        public async Task<ActionResult<Recipe>> Create(Recipe recipe) {
            await _recipeRepository.Create(recipe);

            return CreatedAtRoute("GetRecipe", new { id = recipe.Id.ToString() }, recipe);
        }

        [HttpPost("{id}")]
        public async Task<ActionResult> UploadImage(string id, [FromForm] IFormFile file) {
            var result = await _recipeService.UploadImage(id, file, imageLocation);
            if (result) {
                return Ok();
            } else {
                return NotFound();
            }
        }

        [HttpDelete("{id}", Name = "DeleteRecipe")]
        public async Task<ActionResult<Recipe>> Delete(string id) {
            var recipe = await _recipeRepository.Get(id);

            if (recipe == null) {
                return NotFound();
            }

            await _recipeRepository.Delete(id);

            return recipe;
        }
    }
}
