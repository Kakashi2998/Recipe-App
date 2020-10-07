export const SETCURRENTCATEGORY = 'SETCURRENTCATEGORY';

export const setCurrentCategory = (categoryId) => {
    return {
        type: SETCURRENTCATEGORY,
        payload: categoryId
    }
}