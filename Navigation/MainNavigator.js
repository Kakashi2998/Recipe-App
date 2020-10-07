import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RecipeNavigator from './RecipeNavigator';
import FavouritesNavigator from './FavouritesNavigator';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FAVOURITES, RECIPECOLOR } from '../Constants/ColorConst';
import SearchRecipes from '../Screens/SearhRecipes';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import { Button, Text, View } from 'native-base';
import MyDrawer from '../Components/MyDrawer';

const Drawer = createDrawerNavigator();

const MainNavigator = props => {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <MyDrawer {...props}/>}>
                <Drawer.Screen name='Main' component={TabNavigator}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );  
}

export default MainNavigator;