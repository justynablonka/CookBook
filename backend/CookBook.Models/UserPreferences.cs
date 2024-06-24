using MongoDB.Bson;

namespace CookBook.Models
{
    public class UserPreferences : Entity
    {
        public bool UseAmericanUnits;
        public bool UseSpoons;
        public ObjectId[] FavouriteRecipes { get; set; } = Array.Empty<ObjectId>();
        public IngredientList[] IngredientLists { get; set; } = Array.Empty<IngredientList>();
    }
}
