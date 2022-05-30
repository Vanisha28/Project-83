import React from 'react';
import {Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/Drawer';

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
      <DrawerNavigator/>
      </NavigationContainer>
    )
  }
}