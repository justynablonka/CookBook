using CookBook.Models;
using CookBook.Repository;
using Microsoft.AspNetCore.Http;
using SharpCompress.Common;
using System.IO.Abstractions;

namespace CookBook.Services {
    public class RecipeService : IRecipeService {
        private readonly IBaseRepository<Recipe> _recipeRepository;
        private readonly IFileSystem _fileSystem;

        public RecipeService(IBaseRepository<Recipe> recipeRepository, IFileSystem fileSystem) {
            _recipeRepository = recipeRepository;
            _fileSystem = fileSystem;
        }

        public async Task<bool> UploadImage(string recipeId, IFormFile file, string destPath) {
            var recipe = await _recipeRepository.Get(recipeId);
            if (recipe == null || !string.IsNullOrEmpty(recipe.ImagePath)) {
                return false;
            }
            try {
                var extension = _fileSystem.Path.GetExtension(file.FileName);
                var newDirectory = _fileSystem.Directory.CreateDirectory(_fileSystem.Path.Combine(destPath, recipeId));
                var newFileName = "main" + extension;
                var destFileName = _fileSystem.Path.Combine(newDirectory.FullName, newFileName);
                using (var fileStream = new FileStream(destFileName, FileMode.Create)) {
                    await file.CopyToAsync(fileStream);
                }
                recipe.ImagePath = destFileName;
                await _recipeRepository.Update(recipe);
                return true;
            } catch {
                return false;
            }
        }
    }
}
