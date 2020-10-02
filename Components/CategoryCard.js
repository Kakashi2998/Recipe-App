import { Card, CardItem, Text, View } from 'native-base';
import React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CategoryCard = ({item, navigation}) => {
    return (
        <TouchableOpacity 
        onPress={() => navigation.navigate('Category Recipes', 
        {category: item.title, image: item.image})}>
                <Card style={styles.categoryCard}>
                    <CardItem >
                        <ImageBackground source={item.image} style={styles.cardBackground}>
                            <View style={{backgroundColor: 'rgba(0,0,0,0.2)'}}>
                                <Text style={styles.text}>{item.title}</Text>
                            </View>
                        </ImageBackground>
                    </CardItem>
                </Card>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    categoryCard: {
        height: Dimensions.get('screen').height/4.5,
        width: Dimensions.get('screen').width - 20,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        // elevation: 10,
    },
    cardBackground: {
        height: Dimensions.get('screen').height/4, 
        width: Dimensions.get('screen').width - 25, 
        marginLeft: -15,
        marginTop: -10,
    },
    text: {
        color: 'white',
        fontSize: 30,
        marginTop: Dimensions.get('screen').height/5.5
    }
});

export default CategoryCard;