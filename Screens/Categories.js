import { Container, Content, Footer} from 'native-base';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CategoryData from '../Data/dummyCategories';
import CategoryCard from '../Components/CategoryCard';

const Categories = ({navigation}) => {

    return (
        <Container>
            {/* <Header/> */}
            <Content>
                <FlatList data={CategoryData} 
                renderItem={({item, index, seperators}) => <CategoryCard item={item} navigation={navigation}/>}/>
            </Content>
            <Footer>

            </Footer>
        </Container>
    );
}

const styles = StyleSheet.create({
    categoryCard: {
        // width: 200,
        height: 200,
        marginTop: 10
    }
});

export default Categories;