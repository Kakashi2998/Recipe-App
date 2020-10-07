import { Container, Content, Switch, Text, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import CategoryRecipesHeader from '../Components/CategoryRecipesHeader';
import RecipeCard from '../Components/RecipeCard';

const CategoryRecipes = ({route: {params}}) => {

    const currentCategory = params;

    const isVeg = useSelector(state => state.RecipeReducer.veg);

    const recipes = useSelector(state => state.RecipeReducer.recipes)
    .filter(recipe => recipe.categories.includes(currentCategory.id) && 
    (isVeg? recipe.vegetarian: true));

    return (
            <Container>

                <CategoryRecipesHeader category={currentCategory}/>

                <Content padder>
                    {recipes.map(item => <RecipeCard item={item} key={item.id}/>)}
                </Content>
                
            </Container>
    );
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 10,
        flex: 1
    }
})

export default CategoryRecipes;