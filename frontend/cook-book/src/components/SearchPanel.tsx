//import data from "./ListData.json"
import { useContext } from "react";
import { RecipesContext } from "../App";
import { Link } from "react-router-dom";
import styles from "./SearchPanel.module.css";

export function SearchPanel(props: any) {

    const { recipes, setRecipes } = useContext(RecipesContext);
    // //create a new array by filtering the original array
    // const filteredData = data.filter((el) => {
    //     //if no input the return the original
    //     if (props.input === '') {
    //         return el;
    //     }
    //     //return the item which contains the user input
    //     else {
    //         return el.text.toLowerCase().includes(props.input)
    //     }
    // })

    const filteredRecipes = recipes.filter((r) => {
        if (props.input === '') {
            return r;
        }
        else {
            return r.name.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul className={styles.recipeList}>
            {filteredRecipes.map((r) => (
                <Link to={`/recipes/${r.id}`}><li key={r.id}>{r.name}</li></Link>
            ))}
        </ul>
        // <ul>
        //     {filteredData.map((item) => (
        //         <li key={item.id}>{item.text}</li>
        //     ))}
        // </ul>
    );
}



// id: string,
// name: string,
// description: string,
// type: RecipeType,
// tags: string[],
// steps: string[],
// ingredients: Ingredient[]