import axios from "axios";
import { Recipe } from "../Models/Recipe";

export async function getRecipes(): Promise<Recipe[]> {
    return new Promise((resolve, reject) => {
        axios.get("api/recipe", {}).then((response) => {
            resolve(response.data as Recipe[]);
        }, (err) => {
            reject(err);
        });
    });
}

export async function getRecipe(id: string): Promise<Recipe[]> {
    return new Promise((resolve, reject) => {
        axios.get(`api/recipe/${id}`, {}).then((response) => {
            resolve(response.data as Recipe[]);
        }, (err) => {
            reject(err);
        });
    });
}

export async function createRecipe(recipe: Recipe): Promise<Recipe[]> {
    return new Promise((resolve, reject) => {
        axios.post("api/recipe", recipe, {}).then((response) => {
            resolve(response.data as Recipe[]);
        }, (err) => {
            reject(err);
        });
    });
}

export async function deleteRecipe(id: string): Promise<Recipe[]> {
    return new Promise((resolve, reject) => {
        axios.delete(`api/recipe/${id}`, {}).then((response) => {
            resolve(response.data as Recipe[]);
        }, (err) => {
            reject(err);
        });
    });
}