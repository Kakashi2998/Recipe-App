import { SETCURRENTCATEGORY } from "../Actions/CategoryActions";

const { default: CategoryData } = require("../../Data/dummyCategories");

const initState = {
    categories: CategoryData
}

const CategoryReducer = (state = initState, action) => {
    switch(action.type){
        case SETCURRENTCATEGORY: {
            return {
                ...state,
                currentCategory: action.payload
            }
        }
        default: return state;
    }
}

export default CategoryReducer;