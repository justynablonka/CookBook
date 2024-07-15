import { useContext } from "react";
import { Recipe } from "../Models/Recipe";
import { Ingredient } from "../Models/Ingredient";
import { IngredientsContext, RecipesContext } from "../App";
import { Autocomplete, Button, TextField, FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { useState } from "react";
import styles from "./RecipePanel.module.css";

export function AddIngredient() {

    const { ingredients, setIngredients } = useContext(IngredientsContext);

    const [name, setName] = useState<string>("");

    const ingredientOptions: string[] = [];

    return (
        <div className="ingredient">
            <Autocomplete
                value={name}
                onChange={(event: any, newValue: string | null) => {
                    setName(newValue!);
                }}
                options={Object.keys(ingredients)}
                renderInput={(params) => <TextField {...params} label="Nazwa" />}
            />
            {/* [...new Set(ingredients[ingredient.name].map(x => x.desc))] */}
            {/* <p>{props.ingredient.name}</p>
            <p>{props.ingredient.description}</p>
            <p>{props.ingredient.type}</p>
            <p>{props.ingredient.quantity.value}</p>
            <p>{props.ingredient.quantity.type}</p> */}
        </div>
    );
}