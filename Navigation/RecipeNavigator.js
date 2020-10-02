import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Categories from '../Screens/Categories';
import CategoryRecipes from '../Screens/CategoryRecipes';

const Stack = createStackNavigator();

const RecipeNavigator = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode>
                <Stack.Screen name='Categories' component={Categories}/>
                <Stack.Screen name='Category Recipes' component={CategoryRecipes}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RecipeNavigator;