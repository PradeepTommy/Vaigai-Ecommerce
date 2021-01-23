import React from 'react';
import {  View, Text, Hidden } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home  from '../home';
import {DrawerContent} from './drawercontent';

const Drawer = createDrawerNavigator();

const Drawerr = () => {
  return(
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent  {...props}/>}>
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Drawerr;
