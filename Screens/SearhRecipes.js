import { useFocusEffect } from '@react-navigation/native';
import { Body, Container, Content, Header, Icon, Input, Item, Title, View } from 'native-base';
import React, { useRef } from 'react';
import { FlatList, Keyboard, TouchableWithoutFeedback } from 'react-native';
import RecipeCard from '../Components/RecipeCard';
import { RecipeData } from '../Data/dummyRecipes';

const SearchRecipes = props => {

    const [recipes, setRecipes] = React.useState([]);

    const search = (input) => {
        if(input === ''){
            setRecipes([]);
            return;
        }
        setRecipes(RecipeData.filter(r => r.title.toLowerCase().includes(input.toLowerCase())));
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Container>
                <Header transparent style={{height: 0}}/>
                <Header searchBar rounded>
                    <Item rounded>
                        <Icon name='ios-search'/>
                        <Input placeholder='Search' onChangeText={search}/>
                    </Item>
                </Header>
                <View style={{paddingHorizontal: 10}}>
                    <FlatList data={recipes} renderItem={data => <RecipeCard item={data.item}/>}/>
                </View>
            </Container>

        </TouchableWithoutFeedback>
    );
}

export default SearchRecipes;