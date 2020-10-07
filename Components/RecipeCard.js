import { useNavigation } from '@react-navigation/native';
import { Card, CardItem, Text, View } from 'native-base';
import React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { PRIMARYFONT } from '../Constants/FontConst';

const RecipeCard = ({item}) => {
    
    const navigation = useNavigation();

    return (
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('white')} 
        onPress={() => navigation.navigate('Recipe Details', {id: item.id})}>
            <Card style={styles.recipeCard}>
                <ImageBackground source={{uri: item.image}} 
                style={styles.recipeImage}>
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                    </View>
                </ImageBackground>
            </Card>
        </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    recipeImage: {
        height: 200,
        width: '100%'
    },
    recipeCard: {
        overflow: "hidden",
        borderRadius: 25, 
        elevation: 7,
        marginVertical: 10
    },
    cardContent: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    cardTitle: {
        color: 'white',
        fontSize: 30,
        marginLeft: 10,
        fontFamily: PRIMARYFONT
    }
})

export default RecipeCard;