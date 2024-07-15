import axios from "axios";
import { Recipe } from "../Models/Recipe";

export async function getRecipes(): Promise<Recipe[]> {
    return new Promise((resolve, reject) => {
        axios.get(`${process.env.REACT_APP_RECIPE_API}`, {}).then((response) => {
            resolve(response.data as Recipe[]);
        }, (err) => {
            reject(err);
        });
    });
}

export async function getRecipe(id: string): Promise<Recipe> {
    return new Promise((resolve, reject) => {
        axios.get(`${process.env.REACT_APP_RECIPE_API}/${id}`, {}).then((response) => {
            resolve(response.data as Recipe);
        }, (err) => {
            reject(err);
        });
    });
}

export async function createRecipe(recipe: Recipe): Promise<Recipe> {
    return new Promise((resolve, reject) => {
        axios.post(`${process.env.REACT_APP_RECIPE_API}`, recipe, {}).then((response) => {
            resolve(response.data as Recipe);
        }, (err) => {
            reject(err);
        });
    });
}

export async function uploadImage(id: string, file: FormData): Promise<void> {
    return new Promise((resolve, reject) => {
        axios.post(`${process.env.REACT_APP_RECIPE_API}/${id}`, file, {
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data`,
              }
        }).then((response) => {
            resolve();
        }, (err) => {
            reject(err);

        });
    });
}

export async function deleteRecipe(id: string): Promise<Recipe> {
    return new Promise((resolve, reject) => {
        axios.delete(`${process.env.REACT_APP_RECIPE_API}/${id}`, {}).then((response) => {
            resolve(response.data as Recipe);
        }, (err) => {
            reject(err);
        });
    });
}