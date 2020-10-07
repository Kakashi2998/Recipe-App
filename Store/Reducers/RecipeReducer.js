import { ADDTOFAVOURITES, REMOVEFROMFAVOURITES, TOGGLEVEG } from "../Actions/RecipeActions";

const { RecipeData } = require("../../Data/dummyRecipes");

const initState = {
    recipes: RecipeData,
    veg: false,
    favourites: []
}

const RecipeReducer = (state = initState, action) => {
    switch(action.type){
        case ADDTOFAVOURITES: {
            return {
                ...state,
                favourites: [action.payload.recipe, ...state.favourites]
            }
        };
        case REMOVEFROMFAVOURITES: {
            return{
                ...state,
                favourites: state.favourites.filter(r => r.id !== action.payload.id)
            }
        };
        case TOGGLEVEG: {
            return {
                ...state,
                veg: !state.veg
            }
        }
        default: return state;
    }
}

export default RecipeReducer;