import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Button, Icon } from "native-base";
import { Ionicons } from '@expo/vector-icons';

import Login from "./src/account/login";
import Signup from "./src/account/signup";
import ForgotPassword from "./src/account/forgotpassword";
import Home from "./src/views/home";
import ViewAll from "./src/views/home/viewall";
import ProductDetails from "./src/views/product/productdetails";
import Wishlist from "./src/views/wishlist";
import Cart from "./src/views/cart";
import Order from "./src/views/order";
import { DrawerContent } from "./src/views/drawer/drawercontent";
import SplashScreen from "./src/views/splashscreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Stacks({ navigation }) {
	return (
		<Stack.Navigator
			initialRouteName="SplashScreen"
			screenOptions={{
				headerStyle: {
					backgroundColor: "#1E8449",
				},
				headerTintColor: "#fff",
				headerTitleStyle: {},
			}}>
			<Stack.Screen
				name="SplashScreen"
				component={SplashScreen}
				options={{ headerShown: false, }}
			/>
			<Stack.Screen
				name="Login"
				component={Login}
				options={{ headerShown: false,}}
			/>
			<Stack.Screen
				name="Signup"
				component={Signup}
				options={{ headerShown: false, gestureEnabled: true,  }}
			/>
			<Stack.Screen
				name="ForgotPassword"
				component={ForgotPassword}
				options={{ headerShown: false, gestureEnabled: false }}
			/>
			<Stack.Screen
				name="ViewAll"
				component={ViewAll}
				options={
					({ route }) => ({ title: route.params.header })
				}
			/>
			<Stack.Screen
				name="ProductDetails"
				component={ProductDetails}
				options={
					(
					{
						headerLeft: () => (
							<Button transparent onPress={() => navigation.goBack()}>
								<Icon style={{ color: "white" }} name="arrow-back" />
							</Button>
						),
						headerRight: () => (
							<Button
								transparent
								onPress={() =>
									navigation.navigate("Stacks", {
										screen: "Wishlist",
									})
								}>
								<Icon style={{ color: "white" }} name="heart" />
							</Button>
						),
					})
				}
			/>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Wishlist"
				component={Wishlist}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Cart"
				component={Cart}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Order"
				component={Order}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}

function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				initialRouteName="Stacks"
				drawerContent={(props) => <DrawerContent {...props} />}>
				<Drawer.Screen name="Stacks" component={Stacks} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

export default App;
