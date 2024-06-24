namespace CookBook.Models {
    public class IngredientList : Entity {
        public string Name { get; set; } = "";
        public Ingredient[] Ingredients { get; set; } = Array.Empty<Ingredient>();
    }
}
