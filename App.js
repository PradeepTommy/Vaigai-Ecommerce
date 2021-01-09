import * as React from "react";
import { View, Text } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/account/login';
import Signup from './src/account/signup';
import ForgotPassword from './src/account/forgotpassword';
import Home from './src/views/home';
import ViewAll from './src/views/home/viewall';
import ProductDetails from './src/views/product/productdetails';
import Wishlist from './src/views/wishlist';


const App = createStackNavigator({
  Login: {screen: Login, navigationOptions: {header: false}},
  Signup: {screen: Signup, navigationOptions: {header: false}},
  ForgotPassword: {screen: ForgotPassword, navigationOptions: {header: false}},
  Home: {screen: Home, navigationOptions: {header: false}},
  ViewAll: {screen: ViewAll, navigationOptions: {header: false}},
  ProductDetails: {screen: ProductDetails, navigationOptions: {header: false}},
  Wishlist: {screen: Wishlist, navigationOptions: {header: false}},
});

export default createAppContainer(App);
