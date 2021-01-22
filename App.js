import * as React from "react";
import { View, Text, StatusBar } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/account/login';
import Signup from './src/account/signup';
import ForgotPassword from './src/account/forgotpassword';
import Home from './src/views/home';
import ViewAll from './src/views/home/viewall';
import ProductDetails from './src/views/product/productdetails';
import Wishlist from './src/views/wishlist';
import Drawer from './src/views/drawer';
import Cart from './src/views/cart';
import Order from './src/views/order';


const AppContent = createStackNavigator({
  Login: {screen: Login, navigationOptions: {header: false}},
  Signup: {screen: Signup, navigationOptions: {header: false}},
  ForgotPassword: {screen: ForgotPassword, navigationOptions: {header: false}},
  Drawer: {screen: Drawer, navigationOptions: {header: false}},
  Home: {screen: Home, navigationOptions: {header: false}},
  ViewAll: {screen: ViewAll, navigationOptions: {header: false}},
  ProductDetails: {screen: ProductDetails, navigationOptions: {header: false}},
  Wishlist: {screen: Wishlist, navigationOptions: {header: false}},
  Cart: {screen: Cart, navigationOptions: {header: false}},
  Order: {screen: Order, navigationOptions: {header: false}},
});

// const App = () =>{
//   return(
//   <View style={{flex: 1}}>
//
//    <AppContent />
//  </View>)
// }


export default createAppContainer(AppContent);
