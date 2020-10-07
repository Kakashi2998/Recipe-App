import { Container, Content, Switch, Text, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import CategoryRecipesHeader from '../Components/CategoryRecipesHeader';
import RecipeCard from '../Components/RecipeCard';
import { RecipeData } from '../Data/dummyRecipes';

const CategoryRecipes = props => {
    
    const [veg, setVeg] = React.useState(false);

    const [recipes, setRecipes] = React.useState(RecipeData.filter(recipe => recipe.categories.includes(props.route.params.id)));

    const toggleVeg = () => {
        setVeg(!veg);
        if(!veg){
            setRecipes(recipes.filter(r => r.vegetarian));
            return;
        }
        setRecipes(RecipeData.filter(recipe => recipe.categories.includes(props.route.params.id)));
    }

    return (
            <Container>

                <CategoryRecipesHeader {...props}/>

                <Content padder>
                    <View style={{flexDirection: 'row'}}>
                        <Text>Veg only</Text>
                        <Switch value={veg} onValueChange={toggleVeg}/>
                    </View>
                    {recipes.map(item => <RecipeCard item={item} key={item.id}/>)}
                </Content>
                
            </Container>
    );
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 10,
        flex: 1
    }
})

export default CategoryRecipes;