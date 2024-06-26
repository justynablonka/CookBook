import './App.css';
import React, { useEffect, useState } from 'react';
import { getRecipes } from './Services/RecipeApi';
import { Recipe } from './Models/Recipe';
import { RecipePanel } from './Components/RecipePanel';

export type RecipesContent = {
    recipes: Recipe[],
    setRecipes: (x: Recipe[]) => void
}

export const RecipesContext = React.createContext<RecipesContent>({
    recipes: [],
    setRecipes: () => {}
});

function App() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        getRecipes()
            .then((recipes) => {
                setRecipes(recipes);
            });
    });

    return (
        <div className="App">
            <RecipesContext.Provider value={{ recipes, setRecipes }}>
                <header className="App-header">
                    <p>All recipes</p>
                    {
                        recipes!.map((recipe: Recipe, i: number) => {
                            return (
                                <div key={i}>
                                    <RecipePanel recipe={recipe}/>
                                </div>
                            )
                        })
                    }
                </header>
            </RecipesContext.Provider>
        </div>
    );
}

export default App;
