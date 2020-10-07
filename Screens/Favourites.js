import { Body, Container, Header, Text, View } from 'native-base';
import React from 'react';
import { DrawerLayoutAndroid, FlatList, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import { useSelector } from 'react-redux';
import FocusAwareStatusBar from '../Components/FocusAwareStatusBar';
import RecipeCard from '../Components/RecipeCard';
import { FAVOURITES } from '../Constants/ColorConst';
import { PRIMARYFONT } from '../Constants/FontConst';
import { RecipeData } from '../Data/dummyRecipes';

const Favourites = props => {

    const isVeg = useSelector(state => state.RecipeReducer.veg);

    const recipes = useSelector(state => state.RecipeReducer.favourites)
    .filter(recipe => isVeg? recipe.vegetarian: true);

    return (   
            <Container>
                <Header transparent style={{height: 0}}/>
                <Header style={{backgroundColor: FAVOURITES}}>
                    <FocusAwareStatusBar backgroundColor={FAVOURITES}/>
                    <Body>
                        <Title style={styles.headerText}>Favourites</Title>
                    </Body>
                </Header>

                <View style={{padding: 10}}>
                    {recipes.length === 0 ? 
                    <View style={{justifyContent: 'center', height: '80%', alignSelf: 'center'}}>
                        <Text style={{fontSize: 20}}>Its Lonely here...</Text>
                    </View>:
                    <FlatList data={recipes} 
                    renderItem={data => <RecipeCard item={data.item} navigation={props.navigation}/>}/>
                        }
                </View>

            </Container>
    );

}

const styles = StyleSheet.create({
    headerText: {
        fontFamily: PRIMARYFONT,
        fontSize: 30
    }
})

export default Favourites;