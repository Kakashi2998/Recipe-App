import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import RecipeNavigator from './Navigation/RecipeNavigator';
import { Root } from 'native-base';
import MainNavigator from './Navigation/MainNavigator';

class App extends React.Component{

  state = {
    isReady: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      'sanista-swashed': require('./assets/Fonts/SansitaSwashed-VariableFont_wght.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <View />;
    }

    return (
      <Root>
        <MainNavigator/>
      </Root>
    );
  }
}


export default App;
