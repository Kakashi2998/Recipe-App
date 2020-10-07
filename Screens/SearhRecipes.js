import { Body, Container, Content, Header, Icon, Input, Item, Title, View } from 'native-base';
import React, { useRef } from 'react';
import { FlatList, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useSelector } from 'react-redux';
import RecipeCard from '../Components/RecipeCard';

const SearchRecipes = props => {

    const [recipes, setRecipes] = React.useState([]);

    const AllRecipes = useSelector(state => state.RecipeReducer.recipes);
    const isVeg = useSelector(state => state.RecipeReducer.veg);

    const [text, setText] = React.useState('');

    const search = (input) => {
        setText(input);
        if(input === ''){
            setRecipes([]);
            return;
        }
        setRecipes(AllRecipes
            .filter(r => r.title.toLowerCase().includes(input.toLowerCase()) && 
            (isVeg? r.vegetarian: true)));
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Container>
                <Header transparent style={{height: 0}}/>
                <Header searchBar rounded>
                    <Item rounded>
                        <Icon name='ios-search'/>
                        <Input placeholder='Search' onChangeText={search} value={text}/>
                        {text === '' ? null : 
                        <Icon name='md-close' onPress={() => {setText(''); setRecipes([]);}}/>
                        }
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