import { Body, Container, Content, Footer, Header, Title, View} from 'native-base';
import React from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import CategoryCard from '../Components/CategoryCard';
import FocusAwareStatusBar from '../Components/FocusAwareStatusBar';
import { RECIPECOLOR } from '../Constants/ColorConst';
import { useSelector } from 'react-redux';

const Categories = ({navigation}) => {

    const categories = useSelector(state => state.CategoryReducer.categories);

    return (
            <Container>
                <Header transparent style={{height: 0}}/>
                <Header style={{backgroundColor: RECIPECOLOR}}>
                    <FocusAwareStatusBar backgroundColor={RECIPECOLOR} barStyle='dark-content'/>
                    <Body>
                        <Title style={styles.headerText}>Categories</Title>
                    </Body>
                </Header>
                <FlatList data={categories} style={styles.flatlist} numColumns={2}
                renderItem={({item}) => <CategoryCard item={item} navigation={navigation}/>}/>
            </Container>
            
    );
}

const styles = StyleSheet.create({
    headerText: {
        fontFamily: 'sanista-swashed',
        fontSize: 30,
        color: 'black'
    }
});

export default Categories;