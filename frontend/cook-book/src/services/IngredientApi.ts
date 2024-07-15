import axios from "axios";
import { Ingredient } from "../Models/Ingredient";

export interface Dictionary<T> {
    [key: string]: T;
}

export async function getIngredients(): Promise<Dictionary<Ingredient[]>> {
    return new Promise((resolve, reject) => {
        axios.get(`${process.env.REACT_APP_INGREDIENT_API}`, {}).then((response) => {
            resolve(response.data as Dictionary<Ingredient[]>);
        }, (err) => {
            reject(err);
        });
    });
}