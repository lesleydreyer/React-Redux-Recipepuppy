export const SET_RECIPES = 'SET_RECIPES';
export const setRecipes = (items) => {
    return {
        type: SET_RECIPES,
        items
    }
}

export const FAVORITE_RECIPE = 'FAVORITE_RECIPE';
export const favoriteRecipe = (recipe) => {
    return {
        type: FAVORITE_RECIPE,
        recipe
    }
}

export const DELETE_FAVORITE_RECIPE = 'DELETE_FAVORITE_RECIPE';
export const deleteFavoriteRecipe = (recipe) => {
    return {
        type: DELETE_FAVORITE_RECIPE,
        recipe
    }
}
