import { Ingredient } from "./Ingredient";

export enum RecipeType {
    Meaty,
    Vegetarian,
    Vegan
}

export interface Recipe {
    name: string,
    description: string,
    type: RecipeType,
    tags: string[],
    steps: string[],
    ingredients: Ingredient[]
}