namespace CookBook.Models {
    public enum IngredientType {
        Other,
        Vegetable,
        Fruit,
        Dairy,
        Meat,
        Fish,
        Grains,
        Breads,
        Nuts,
        Condiments,
        Herbs,
        Oils,
        Sweets,
    }

    public class Ingredient {
        public string Name { get; set; } = "";
        public string Description { get; set; } = "";
        public IngredientType Type { get; set; }
        public Quantity Quantity { get; set; } = new Quantity();
    }
}
