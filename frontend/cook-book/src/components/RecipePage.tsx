import { useParams } from "react-router-dom";
import { RecipePanel } from "./RecipePanel";
import { TopBar } from "./TopBar";
import { BottomBar } from "./BottomBar";
import { useContext, useEffect, useState } from "react";
import { RecipesContext } from "../App";
import { Recipe } from "../Models/Recipe";
import styles from "./RecipePage.module.css";

export function RecipePage() {

    const { id } = useParams();
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const { recipes, setRecipes } = useContext(RecipesContext);

    useEffect(() => {
        let recipe = recipes.find(x => x.id === id);
        if (recipe) {
            setRecipe(recipe);
        }
    });

    return (
        <div>
            <TopBar />
            {recipe ? <RecipePanel recipe={recipe} /> : <p>Nie znaleziono przepisu</p>}
            <BottomBar />
        </div>
    );
}