
using Microsoft.AspNetCore.Http;

namespace CookBook.Services {
    public interface IRecipeService {
        Task<bool> UploadImage(string recipeId, IFormFile file, string destPath);
    }
}