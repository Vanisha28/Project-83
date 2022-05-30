import React from "react"; 
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTab from './BottomTab';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator()

const DrawerNavigation = ()=>{
return(
  <Drawer.Navigator screenOptions = {{headerShown : false}}>
  <Drawer.Screen name = 'Home' component = {BottomTab}/>
  <Drawer.Screen name = 'Profile' component = {Profile}/>
  </Drawer.Navigator>
)

}
export default DrawerNavigation