namespace CookBook.Models {
    public enum QuantityType {
        Countable,
        Weight,
        Liquid,
    }

    public class Quantity {
        public double Value { get; set; }
        public QuantityType Type { get; set; }
    }
}
