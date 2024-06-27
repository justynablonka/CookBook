import './App.css';
import React, { useEffect, useState } from 'react';
import { getRecipes } from './Services/RecipeApi';
import { Recipe } from './Models/Recipe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './Components/HomePage';
import { RecipePage } from './Components/RecipePage';
import { AddRecipePage } from './Components/AddRecipePage';

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
            // we could get a list of ingredients as well for using when adding new recipes
    });

    return (
        <div className="App">
            <BrowserRouter>
                <RecipesContext.Provider value={{ recipes, setRecipes }}>
                    <Routes>
                        <Route index element={<HomePage/>}/>
                        <Route path="/recipes/new" element={<AddRecipePage/>}/>
                        <Route path="/recipes/:id" element={<RecipePage/>}/>
                    </Routes>
                </RecipesContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
