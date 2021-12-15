

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';
import {createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import HomeScreen from './screens/HomeScreen';
import MostCommonSurname from './screens/MostCommonSurname';


export default class App extends React.Component {
  render () {
    return(
          <AppContainer style={ styles.TB}/>
    )
  }
}





const TabNavigator = createBottomTabNavigator ({
  Home: {screen: HomeScreen },
  mostCommonName: {screen: MostCommonSurname },
})



const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  TB: {
    color: 'red',
    backgroundColor: '#343434',
    textAlignVertical: 'center',
    textAlign: 'center',
    flex: 1
  }
});
