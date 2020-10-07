import { Body, Card, CardItem, Container, Content, Header, Left, List, ListItem, Right, Tab, Tabs, Text, Title, Toast, View } from 'native-base';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FocusAwareStatusBar from '../Components/FocusAwareStatusBar';
import { MaterialIcons } from '@expo/vector-icons'; 
import { RECIPECOLOR } from '../Constants/ColorConst';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { PRIMARYFONT } from '../Constants/FontConst';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourites, removeFromFavourites } from '../Store/Actions/RecipeActions';

const RecipeDetails = ({route: {params}}) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const recipe = params;

    const favIndex = useSelector(state => state.RecipeReducer.favourites)
    .findIndex(r => r.id === recipe.id);

    const [liked, setLiked] = React.useState(favIndex >= 0);

    const toggleLiked = () => {
        if(!liked){
            dispatch(addToFavourites(recipe));
            Toast.show({text: `${recipe.title} added to favourites!`, buttonText: 'OK'});
        }
        else {
            dispatch(removeFromFavourites(recipe.id));
            Toast.show({text: `${recipe.title} removed from favourites!`, buttonText: 'OK'});
        }
        setLiked(liked => !liked);
    }

    return (
        <Container>
            <Header transparent style={{height: 0}}/>
            <Header style={{backgroundColor: RECIPECOLOR, height: 100}}
             hasTabs >
                <FocusAwareStatusBar backgroundColor='#32CD32'/>
                <Left>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10, marginRight: 20}}>
                        <Ionicons name="ios-arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                </Left>
                <Body style={{marginRight: -200, marginLeft: -50}}>
                    <Text style={styles.headerText} numberOfLines={4}>{recipe.title}</Text>
                </Body>
                <Right>
                    <TouchableOpacity onPress={toggleLiked} style={{width: 50}}>
                        {liked? <MaterialIcons name="favorite" size={26} color="black" />: 
                        <MaterialIcons name="favorite-border" size={24} color="black" />}
                    </TouchableOpacity>
                </Right>
            </Header>

            <Tabs tabBarActiveTextColor='black' tabBarInactiveTextColor='black'>
                <Tab heading='Media' activeTabStyle={styles.tab} tabStyle={styles.tab}>
                    <Content padder>
                        <Card style={{elevation: 7}}>
                            <Image source={{uri: recipe.image}} style={styles.image}/>
                        </Card>
                    </Content>
                </Tab>
                <Tab heading='Ingredients' activeTabStyle={styles.tab} tabStyle={styles.tab}>
                    <Content padder>
                        <Card>
                            <List style={{backgroundColor: '#ffcc00'}}> 
                                {recipe.ingredients.map((ingredient, index) => 
                                    <ListItem key={index}>
                                        <Text>{ingredient}</Text>
                                    </ListItem>    
                                )}
                            </List>
                        </Card>
                    </Content>
                </Tab>
                <Tab heading='Steps' activeTabStyle={styles.tab} tabStyle={styles.tab}>
                    <Content padder>
                        <List>
                            {recipe.steps.map((step, index) => 
                                <Card key={index}>
                                    <CardItem header>
                                        <Text>Step {index + 1}:</Text>
                                    </CardItem>
                                    <CardItem>
                                        <Text>{step}</Text>
                                    </CardItem>
                                </Card>
                            )}
                        </List>
                    </Content>
                </Tab>
            </Tabs>
        </Container>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%', 
        height: 250,
    },
    tab: {
        backgroundColor: RECIPECOLOR,
    },
    headerText: {
        fontFamily: PRIMARYFONT,
        fontSize: 30,
        color: 'black',
    },
    tabText: {
        color: 'black'
    }
})

export default RecipeDetails;