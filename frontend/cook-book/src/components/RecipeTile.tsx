import styles from "./RecipeTile.module.css";
import * as React from 'react';
import { Recipe } from "../Models/Recipe";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

interface RecipeProps {
    randomRecipe: Recipe
}

export function RecipeTile(props: RecipeProps) {

    const [isFavorite, setIsFavorite] = React.useState(false);
    const handleClickFavoriteRecipe = () => setIsFavorite((fav) => !fav);

    const handleMouseDownFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div className={styles.tile}>
            {props.randomRecipe.name}
            <IconButton
                aria-label="toggle recipe favorite"
                onClick={handleClickFavoriteRecipe}
                onMouseDown={handleMouseDownFavorite}
            >{isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
            {/* ikona nie pokazuj mi tego przepisu? */}
            <img src={props.randomRecipe.imagePath}></img>
        </div>
    );
}