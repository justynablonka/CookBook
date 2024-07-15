import { RecipeTile } from "./RecipeTile";
import styles from "./RecipeCarousel.module.css";
import { useContext, useEffect, useState } from "react";
import { RecipesContext } from "../App";
import { Recipe } from "../Models/Recipe";

export function RecipeCarousel() {

    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const { recipes, setRecipes } = useContext(RecipesContext);
    const [randomFourRecipes, setRandomFourRecipes] = useState<Recipe[]>([]);

    const getRandom = (arr: Recipe[], n: number) => {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }
    useEffect(() => {
        if (recipes.length > 0 && randomFourRecipes.length == 0) {
            setRandomFourRecipes(getRandom(recipes, 2));
        }
    }, [recipes]);

    return (
        <div className={styles.container}>
            <ul className={styles.carousel}>
                {randomFourRecipes.map((r) => (
                    <li key={r.id}>
                            <RecipeTile randomRecipe={r} />
                    </li>
                ))}
            </ul>
        </div>
    )
}