import { Body, Container, Content, Footer, Header, Title, View} from 'native-base';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import CategoryData from '../Data/dummyCategories';
import CategoryCard from '../Components/CategoryCard';

const Categories = ({navigation}) => {

    return (
        <Container>
            <Header>
                <Body>
                    <Title>Categories</Title>
                </Body>
            </Header>
            
            <FlatList data={CategoryData} style={styles.flatlist} 
            renderItem={({item}) => <CategoryCard item={item} navigation={navigation}/>}/>
            
            <Footer>

            </Footer>
        </Container>
    );
}

const styles = StyleSheet.create({
    flatlist: {
        // marginBottom: 10
    }
});

export default Categories;