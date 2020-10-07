import { useNavigation } from '@react-navigation/native';
import { Body, Button, Container, Content, Footer, Header, Icon, Left, Title, View } from 'native-base';
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FocusAwareStatusBar from './FocusAwareStatusBar';
import { Ionicons } from '@expo/vector-icons'; 
import { PRIMARYFONT } from '../Constants/FontConst';
import CategoryData from '../Data/dummyCategories';



const CategoryRecipesHeader = ({category}) => {

    // console.log(category);

    const navigation = useNavigation();

    return (
        <ImageBackground source={{uri: category.image}} style={styles.headerImage}>
            <Header style={styles.header} transparent>
                <FocusAwareStatusBar backgroundColor='transparent'/>
                <Left>
                    <TouchableOpacity>
                        <Button transparent style={styles.headerTitle}
                        onPress={() => navigation.goBack()}>
                            <Ionicons name="ios-arrow-back" size={24} color="white" />
                        </Button> 
                    </TouchableOpacity>
                </Left>
                <Body style={{marginLeft: -25}}>
                    <Title style={{...styles.headerTitle, marginLeft: -50}}>{category.title}</Title>
                </Body>
            </Header>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        width: '100%', 
        height: 250,
        elevation: 7,
    },
    headerTitle: {
        fontSize: 40,
        marginTop: 150,
        fontFamily: PRIMARYFONT
    },
    header: {
        height: 250,
        backgroundColor: 'rgba(0,0,0,0.2)'
    }
})

export default CategoryRecipesHeader;