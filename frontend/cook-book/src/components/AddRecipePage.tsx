import { useState } from "react";
import { TopBar } from "./TopBar";

export function AddRecipePage() {

    const [name, setName] = useState<string>("");
    const [desc, setDesc] = useState<string>("");
    const [recipeType, setRecipeType] = useState<string>("");
    const [tags, setTags] = useState<string[]>([]);
    const [newTag, setNewTag] = useState<string>("");

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

    return (
        <div className="addRecipePage">
            <TopBar />

            <label htmlFor="name">Nazwa: </label>
            <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)}/>

            <label htmlFor="desc">Opis: </label>
            <input type="text" id="desc" name="desc" value={desc} onChange={(event) => setDesc(event.target.value)}/>

            <label htmlFor="recipeType">Typ: </label>
            <select name="recipeType" id="recipeType" value={recipeType} onChange={(event) => setRecipeType(event.target.value)}>
                <option value="0">Mięsny</option>
                <option value="1">Wege</option>
                <option value="2">Wegański</option>
            </select>

            {
                tags.map((tag: string, i: number) => {
                    return (
                        <p onClick={() => removeTag(tag)} key={i}>{tag}</p>
                    );
                })
            }
            <label htmlFor="newTag">Opis: </label>
            <input type="text" id="newTag" name="newTag" value={newTag} onChange={(event) => setNewTag(event.target.value)}/>
            <button onClick={() => addNewTag(newTag)}>+</button>

            <p>Rozpisane stepy</p>

            <p>Rozpisane składniki</p>
        </div>
    );
}