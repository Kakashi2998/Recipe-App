export const ADDTOFAVOURITES = 'ADDTOFAVOURITES';

export const REMOVEFROMFAVOURITES = 'REMOVEFROMFAVOURITES';

export const TOGGLEVEG = 'TOGGLEVEG';

export const addToFavourites = (recipe) => {
    return {
        type: ADDTOFAVOURITES,
        payload: {
            recipe: recipe
        }
    }
}

export const removeFromFavourites = (id) => {
    return{
        type: REMOVEFROMFAVOURITES,
        payload: {
            id: id
        }
    }
}

export const toggleVeg = () => {
    return {
        type: TOGGLEVEG
    }
}