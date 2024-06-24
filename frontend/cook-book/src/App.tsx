import './App.css';
import React, { useEffect, useState } from 'react';
import { getRecipes } from './Services/RecipeApi';
import { Recipe } from './Models/Recipe';
import { RecipePanel } from './components/RecipePanel';

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
        <header className="App-header">
            <p>All recipes</p>
            {
                recipes.map((recipe: Recipe, i: number) => {
                    return (
                        <div key={i}>
                            <RecipePanel recipe={recipe}/>
                        </div>
                    )
                })
            }
        </header>
        </div>
    );
}

export default App;
