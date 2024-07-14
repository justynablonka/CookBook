using CookBook.Models;
using CookBook.Services;
using Microsoft.AspNetCore.Mvc;

namespace CookBook.API.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class IngredientController : ControllerBase {
        private readonly IIngredientService _ingredientService;

        public IngredientController(IIngredientService ingredientService) {
            _ingredientService = ingredientService;
        }

        [HttpGet]
        public async Task<ActionResult<Dictionary<string, List<Ingredient>>>> Get() {
            return await _ingredientService.GetAllIngredients();
        }
    }
}
