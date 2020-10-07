import React from 'react';
import Categories from '../Screens/Categories';
import CategoryRecipes from '../Screens/CategoryRecipes';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import RecipeDetails from '../Screens/RecipeDetails';
import Favourites from '../Screens/Favourites';

enableScreens();
const Stack = createNativeStackNavigator();

const RecipeNavigator = props => {
    return (
            <Stack.Navigator initialRouteName='Categories' screenOptions={{headerShown: false}}> 
                <Stack.Screen name='Categories' component={Categories} />
                <Stack.Screen name='Category Recipes' component={CategoryRecipes} />
                <Stack.Screen name='Recipe Details' component={RecipeDetails} />
                <Stack.Screen name='Favourites' component={Favourites}/>
            </Stack.Navigator>
    );
}

export default RecipeNavigator;