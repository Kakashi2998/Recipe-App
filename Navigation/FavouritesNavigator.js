import React from 'react';
import Favourites from '../Screens/Favourites';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

enableScreens();
const Stack = createNativeStackNavigator();

const FavouritesNavigator = props => {
    return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='Favourite Recipes' component={Favourites}/>
            </Stack.Navigator>
    );
}

export default FavouritesNavigator;