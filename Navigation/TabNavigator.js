import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import RecipeNavigator from './RecipeNavigator';
import FavouritesNavigator from './FavouritesNavigator';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FAVOURITES, RECIPECOLOR } from '../Constants/ColorConst';
import SearchRecipes from '../Screens/SearhRecipes';
import { FontAwesome5 } from '@expo/vector-icons'; 

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = props => {
    return (
            <Tab.Navigator initialRouteName='Recipes' shifting={true} 
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    if(route.name === 'Recipes')
                        return <MaterialIcons name="restaurant" size={24} color='black' />;
                    else if(route.name === 'Search')
                        return <FontAwesome5 name="search" size={24} color="black" />;
                    return <MaterialIcons name="favorite" size={24} color='black' />;
                },
                tabBarColor: route.name === 'Recipes' ? RECIPECOLOR : (route.name === 'Favourites'? FAVOURITES : '#3F51B5')
            })} activeColor='black'>
                <Tab.Screen name='Recipes' component={RecipeNavigator} />
                <Tab.Screen name='Favourites' component={FavouritesNavigator} />
                <Tab.Screen name='Search' component={SearchRecipes}/>
            </Tab.Navigator>
    );
}

export default TabNavigator;