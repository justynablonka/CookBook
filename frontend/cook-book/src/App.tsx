import './App.css';
import React, { useEffect, useState } from 'react';
import { getRecipes } from './Services/RecipeApi';
import { Recipe } from './Models/Recipe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './Components/HomePage';
import { RecipePage } from './Components/RecipePage';
import { AddRecipePage } from './Components/AddRecipePage';
import { Ingredient } from './Models/Ingredient';
import { Dictionary, getIngredients } from './Services/IngredientApi';

export type RecipesContent = {
    recipes: Recipe[],
    setRecipes: (x: Recipe[]) => void
}

export const RecipesContext = React.createContext<RecipesContent>({
    recipes: [],
    setRecipes: () => { }
});

export type IngredientsContent = {
    ingredients: Dictionary<Ingredient[]>,
    setIngredients: (x: Dictionary<Ingredient[]>) => void
}

export const IngredientsContext = React.createContext<IngredientsContent>({
    ingredients: {},
    setIngredients: () => { }
});

function App() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [ingredients, setIngredients] = useState<Dictionary<Ingredient[]>>({});

    useEffect(() => {
        getRecipes()
            .then((recipes) => {
                setRecipes(recipes);
            });
        getIngredients()
            .then((ingredients) => {
                setIngredients(ingredients);
            })
    });

    return (
        <div className="App">
            <BrowserRouter>
                <RecipesContext.Provider value={{ recipes, setRecipes }}>
                    <IngredientsContext.Provider value={{ ingredients, setIngredients }}>
                        <Routes>
                            <Route index element={<HomePage />} />
                            <Route path="/recipes/new" element={<AddRecipePage />} />
                            <Route path="/recipes/:id" element={<RecipePage />} />
                        </Routes>
                    </IngredientsContext.Provider>
                </RecipesContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
