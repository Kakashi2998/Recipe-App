import { useNavigation } from '@react-navigation/native';
import { Card, CardItem, Text, View } from 'native-base';
import React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { PRIMARYFONT } from '../Constants/FontConst';

const CategoryCard = ({item}) => {

    const navigation = useNavigation();

    return (
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('white')} 
        onPress={() => navigation.navigate('Category Recipes', {...item})}>
            <Card style={styles.categoryCard}>
                <ImageBackground source={{uri: item.image}} style={styles.cardBackground}>
                    <View style={{backgroundColor: 'rgba(0,0,0,0.2)'}}>
                        <Text style={{...styles.text, marginTop: item.title.length>11? 
                        Dimensions.get('screen').height/8: 
                        Dimensions.get('screen').height/6}} numberOfLines={2}>
                            {item.title}
                        </Text>
                    </View>
                </ImageBackground>
            </Card>
        </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    categoryCard: {
        borderRadius: 25,
        overflow: 'hidden',
        height: Dimensions.get('screen').height/4.5,
        marginLeft: 10,
        elevation: 7
    },
    cardBackground: {
        width: Dimensions.get('screen').width/2.2,
        height: Dimensions.get('screen').height/4.5
    },
    text: {
        color: 'white',
        fontSize: 30,
        marginTop: Dimensions.get('screen').height/7.5,
        marginLeft: 10,
        fontFamily: PRIMARYFONT
    }
});

export default CategoryCard;