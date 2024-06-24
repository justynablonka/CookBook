namespace CookBook.Models
{
    public class UserPreferences : Entity {
        public bool UseAmericanUnits;
        public bool UseSpoons;
        public string[] FavouriteRecipes { get; set; } = Array.Empty<string>();
        public IngredientList[] IngredientLists { get; set; } = Array.Empty<IngredientList>();
    }
}
