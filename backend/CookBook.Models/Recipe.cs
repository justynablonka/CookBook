namespace CookBook.Models
{
    public enum RecipeType
    {
        Meaty,
        Vegetarian,
        Vegan,
    }

    public class Recipe : Entity
    {
        public string Name { get; set; } = "";
        public string Description { get; set; } = "";
        public RecipeType Type { get; set; }
        public string[] Tags { get; set; } = Array.Empty<string>();
        public string[] Steps { get; set; } = Array.Empty<string>();
        public Ingredient[] Ingredients { get; set; } = Array.Empty<Ingredient>();
    }
}
