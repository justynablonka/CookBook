import { useContext } from "react";
import { Recipe } from "../Models/Recipe";
import { Ingredient } from "../Models/Ingredient";
import { RecipesContext } from "../App";

import styles from "./RecipePanel.module.css";

interface RecipeProps {
    recipe: Recipe
}

export function RecipePanel(props: RecipeProps) {

    const {recipes, setRecipes} = useContext(RecipesContext);

    return (
        <div className={styles.recipe}>
            <p>{props.recipe.name}</p>
            <p>{props.recipe.description}</p>
            <p>{props.recipe.type}</p>
            {
                props.recipe.tags.map((tag: string, i: number) => {
                    return (
                        <div className="tag" key={i}>
                            <p>{tag}</p>
                        </div>
                    );
                })
            }
            {
                props.recipe.steps.map((step: string, i: number) => {
                    return (
                        <div className="step" key={i}>
                            <p>{step}</p>
                        </div>
                    );
                })
            }
            {
                props.recipe.ingredients.map((ingredient: Ingredient, i: number) => {
                    return (
                        <div className="ingredient" key={i}>
                            <p>{ingredient.name}</p>
                            <p>{ingredient.description}</p>
                            <p>{ingredient.type}</p>
                            <p>{ingredient.quantity.value}</p>
                            <p>{ingredient.quantity.type}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}