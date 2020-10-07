import { Body, Container, Header, View } from 'native-base';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import FocusAwareStatusBar from '../Components/FocusAwareStatusBar';
import RecipeCard from '../Components/RecipeCard';
import { FAVOURITES } from '../Constants/ColorConst';
import { PRIMARYFONT } from '../Constants/FontConst';
import { RecipeData } from '../Data/dummyRecipes';

const Favourites = props => {

    const [recipes, setRecipes] = React.useState(RecipeData.filter(r => r.favourite === true));

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
                    <FlatList data={recipes} 
                    renderItem={data => <RecipeCard item={data.item} navigation={props.navigation}/>}/>
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