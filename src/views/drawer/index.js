import React from 'react';
import {  View, Text, Hidden } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home  from '../home';
import {DrawerContent} from './drawercontent';
import WishList  from '../wishlist';
import Views  from '../home/viewall';
import Order from '../order';
import Cart from '../cart';
import ProductDetails from '../product/productdetails';

const Drawer = createDrawerNavigator();

const Drawerr = () => {
  return(
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent  {...props}/>}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Wishlist" component={WishList} />
        <Drawer.Screen name="View All" component={Views} />
        <Drawer.Screen name="Order" component={Order} />
        <Drawer.Screen name="Cart" component={Cart} />
        <Drawer.Screen name="ProductDetails" component={ProductDetails} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Drawerr;
