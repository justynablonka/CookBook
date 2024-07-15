import { useState } from "react";
import { TopBar } from "./TopBar";
import { BottomBar } from "./BottomBar";
import styles from "./AddRecipePage.module.css"
import { Button, TextField, FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { AddIngredient } from "./AddIngredient";
import DragDrop from "./DragDrop";
import { createRecipe, uploadImage } from "../Services/RecipeApi";
import { Recipe, RecipeType } from "../Models/Recipe";
import { Ingredient } from "../Models/Ingredient";


export function AddRecipePage() {

    const [name, setName] = useState<string>("");
    const [desc, setDesc] = useState<string>("");
    const [recipeType, setRecipeType] = useState<RecipeType>(RecipeType.Meaty);
    const [tags, setTags] = useState<string[]>([]);
    const [newTag, setNewTag] = useState<string>("");
    const [steps, setSteps] = useState<string[]>([]);
    const [newStep, setNewStep] = useState<string>("");
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [newIngredient, setNewIngredient] = useState<string>("");
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string>("");

    //The URL.createObjURL method can cause memory leak if it’s not cleaned up after use. so always ensure to clean it up using URL.revokeObjectURL(previewUrl).

    const handleChange = (file: File) => {
        setFile(file);
        setPreviewUrl(URL.createObjectURL(file));
    };

    const removeTag = (tag: string) => {
        let newTags = tags.filter(x => x !== tag);
        setTags(newTags);
    }

    const addNewTag = (tag: string) => {
        if (tag) {
            let newTags = [...tags, tag];
            setTags(newTags);
            setNewTag("");
        }
    }

    const addNewStep = (step: string) => {
        if (step) {
            let newSteps = [...steps, step];
            setSteps(newSteps);
            setNewStep("");
        }
    }

    const addNewIngredient = (ingredient: string) => {
        if (ingredient) {
            let newIngredients = [...ingredients, ingredient];
            setIngredients(newIngredients);
            setNewIngredient("");
        }
    }

    const addNewRecipe = async (name: string, desc: string, recipeType: RecipeType, tags: string[], steps: string[], ingredients: Ingredient[]) => {
        let newRecipe: Recipe = {
            "id": "",
            "name": name,
            "description": desc,
            "imagePath": "",
            "type": recipeType,
            "tags": tags,
            "steps": steps,
            "ingredients": ingredients,
        }
        newRecipe = await createRecipe(newRecipe);
        if (newRecipe) {
            console.log(file);
            let data = new FormData();
            data.append('file', file!, file!.name);
            let result = await uploadImage(newRecipe.id, data);
            console.log(result);
        }
    }

    return (
        <div className={styles.addRecipePage}>
            <TopBar />
            <header><h1>Dodaj nowy przepis</h1></header>
            <div className={styles.addRecipeForm}>
                <div className={styles.smallContainer}>
                    <TextField
                        id="name"
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                        variant="filled"
                        label="Nazwa"
                        size="small"
                    />
                </div>
                <div className={styles.smallContainer}>
                    <TextField
                        id="desc"
                        onChange={(event) => setDesc(event.target.value)}
                        value={desc}
                        variant="filled"
                        label="Opis"
                        size="small"
                    />
                </div>
                <div className={styles.smallContainer}>
                    <FormControl fullWidth variant="filled">
                        <InputLabel id="recipeTypeLabel">Typ</InputLabel>
                        <Select
                            labelId="recipeTypeLabel"
                            id="recipeType"
                            value={recipeType}
                            label="Typ"
                            onChange={(event) => {
                                let rT = event.target.value as RecipeType;
                                setRecipeType(rT)
                            }}
                        >
                            <MenuItem value={RecipeType.Meaty}>Mięsny</MenuItem>
                            <MenuItem value={RecipeType.Vegetarian}>Wege</MenuItem>
                            <MenuItem value={RecipeType.Vegan}>Wegański</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className={styles.smallContainer}>
                    {
                        tags.map((tag: string, i: number) => {
                            return (
                                <div className={styles.tagContainer}>
                                    <div className={styles.tagDiv}>
                                        <p onClick={() => removeTag(tag)} key={i} className={styles.tag}>{tag}</p>
                                        <p className={styles.removeButton}>X</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className={styles.smallContainer}>
                    <label htmlFor="newTag">Tag: </label>
                    <input type="text" id="newTag" name="newTag" value={newTag} onChange={(event) => setNewTag(event.target.value)} />
                    <button onClick={() => addNewTag(newTag)}>+</button>
                </div>

                <p>Dodaj składniki</p>

                <div className={styles.smallContainer}>
                    <AddIngredient />
                </div>

                <div className={styles.smallContainer}>
                    <label htmlFor="newIngredient">Składnik: </label>
                    <input type="text" id="newIngredient" name="newIngredient" value={newIngredient} onChange={(event) => setNewIngredient(event.target.value)} />
                    <button onClick={() => addNewIngredient(newIngredient)}>+</button>
                </div>

                <div className={styles.smallContainer}>
                    {
                        steps.map((step: string, i: number) => {
                            return (
                                <p key={i}>{i + 1 + '. ' + step}</p>
                            );
                        })
                    }
                </div>

                <div className={styles.smallContainer}>
                    <label htmlFor="newStep">Krok: </label>
                    <input type="text" id="newStep" name="newStep" value={newStep} onChange={(event) => setNewStep(event.target.value)} />
                    <button onClick={() => addNewStep(newStep)}>+</button>
                </div>

                <div className={styles.smallContainer}>
                    <DragDrop onUpload={handleChange} />
                    {previewUrl && <div className={styles.preview}>
                        <img src={previewUrl} alt="image" />
                    </div>}
                </div>
            </div>
            <Button onClick={() => addNewRecipe(name, desc, recipeType, tags, steps, [])} variant="contained" className={styles.addRecipeButton}>
                Prześlij przepis
            </Button>
            <BottomBar />
        </div>
    );
}