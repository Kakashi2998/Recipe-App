import { Card, CardItem, Text } from 'native-base';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CategoryCard = ({item, navigation}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Category Recipes')}>
            <Card style={styles.categoryCard}>
                <CardItem header>
                    <Text>{item.title}</Text>
                </CardItem>
                <CardItem cardBody>
                    <Image source={item.image} style={{height: 200, width: 400}}/>
                </CardItem>
            </Card>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    categoryCard: {
        // width: 200,
        height: 200,
        marginTop: 10
    }
});

export default CategoryCard;