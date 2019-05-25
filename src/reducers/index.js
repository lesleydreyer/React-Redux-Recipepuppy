import { combineReducers } from 'redux';
import { SET_RECIPES, FAVORITE_RECIPE, DELETE_FAVORITE_RECIPE } from '../actions/index';

export const recipes = (state = [], action) => {
    switch (action.type) {
        case SET_RECIPES:
            return action.items;
        default:
            return state;
    }
}

export const favoriteRecipe = (state = [], action) => {
    switch (action.type) {
        case FAVORITE_RECIPE:
            return state = [...state, action.recipe];//take state and add the recipe
        case DELETE_FAVORITE_RECIPE:
            //console.log('action', state.recipe.href)
            let newState = state.filter(item => item.href !== action.recipe.href);
            return newState;
        default:
            return state;
    }
}


const rootReducer = combineReducers({ recipes, favoriteRecipe });

export default rootReducer;