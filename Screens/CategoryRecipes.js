import { Body, Button, Container, Content, Footer, Header, Icon, Left, Title } from 'native-base';
import React from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';

const CategoryRecipes = props => {
    return (
        <Container>
            <ImageBackground source={props.route.params.image} style={styles.headerImage}>
                <Header transparent androidStatusBarColor='transparent' style={styles.header}>
                    <Left>
                        <Button transparent style={styles.headerTitle} 
                        onPress={() => props.navigation.goBack()}>
                            <Icon name='arrow-back'/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{...styles.headerTitle, marginLeft: -50}}>{props.route.params.category}</Title>
                    </Body>
                </Header>
            </ImageBackground>
            <Content>

            </Content>
            <Footer>

            </Footer>
        </Container>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        width: '100%', 
        height: 250,
    },
    headerTitle: {
        fontSize: 30,
        marginTop: 150
    },
    header: {
        height: 250,
        backgroundColor: 'rgba(0,0,0,.2)'
    }
})

export default CategoryRecipes;