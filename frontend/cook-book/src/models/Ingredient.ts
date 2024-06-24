import { Quantity } from "./Quantity";

export enum IngredientType {
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
};

export interface Ingredient {
    name: string,
    description: string,
    type: IngredientType,
    quantity: Quantity
}