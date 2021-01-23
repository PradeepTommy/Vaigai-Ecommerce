import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Paragraph, Drawer } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import User from "../../../assets/user.png";

export function DrawerContent(props) {
	return (
		<View style={{ flex: 1 }}>
			<DrawerContentScrollView {...props}>
				<View style={styles.drawerContent}>
					<View>
						<View
							style={{
								marginTop: "10%",
								marginLeft: "auto",
								marginRight: "auto",
							}}>
							<Avatar.Image
								source={User}
								size={80}
								style={{ marginLeft: "auto", marginRight: "auto" }}
							/>
							<View>
								<Title
									style={{
										marginLeft: "auto",
										marginRight: "auto",
										fontSize: 16,
										marginTop: 3,
										fontWeight: "bold",
									}}>
									Pradeep Kannan
								</Title>
								<Caption style={styles.caption}>pradeep@gmail.com</Caption>
							</View>
						</View>
						<View style={{ display: "none" }}>
							<View style={styles.row}>
								<View style={styles.section}>
									<Paragraph style={[styles.paragraph, styles.caption]}>
										80
									</Paragraph>
									<Caption style={styles.caption}>Following</Caption>
								</View>
								<View style={styles.section}>
									<Paragraph style={[styles.paragraph, styles.caption]}>
										80
									</Paragraph>
									<Caption style={styles.caption}>Following</Caption>
								</View>
							</View>
						</View>
					</View>
					<Drawer.Section style={styles.drawerSection}>
						<Drawer.Item
							icon={({ color, size }) => (
								<Ionicons name="home-outline" color={color} size={size} />
							)}
							label="Home"
							onPress= {() =>
								props.navigation.navigate("Stacks", {
									screen: "Home",
								})
							}
						/>
						<Drawer.Item
							icon={({ color, size }) => (
								<Ionicons name="heart-outline" color={color} size={size} />
							)}
							label="WishList"
							onPress= {() =>
								props.navigation.navigate("Stacks", {
									screen: "Wishlist",
								})
							}
						/>
						<Drawer.Item
							icon={({ color, size }) => (
								<Ionicons name="cart-outline" color={color} size={size} />
							)}
							label="Cart"
							onPress= {() =>
								props.navigation.navigate("Stacks", {
									screen: "Cart",
								})
							}
						/>
						<Drawer.Item
							icon={({ color, size }) => (
								<Ionicons name="push-outline" color={color} size={size} />
							)}
							label="Your Order"
							onPress= {() =>
								props.navigation.navigate("Stacks", {
									screen: "Order",
								})
							}
						/>
						<Drawer.Item
							icon={({ color, size }) => (
								<Ionicons name="settings-outline" color={color} size={size} />
							)}
							label="Settings"
						/>
					</Drawer.Section>
				</View>
			</DrawerContentScrollView>
			<Drawer.Section style={styles.bottomDrawerSection}>
				<Drawer.Item
					icon={({ color, size }) => (
						<Ionicons name="exit-outline" color={color} size={size} />
					)}
					label="Sign Out"
				/>
			</Drawer.Section>
		</View>
	);
}

const styles = StyleSheet.create({
	drawerContent: {
		flex: 1,
	},
	userInfoSection: {
		paddingLeft: 20,
	},
	caption: {
		fontSize: 14,
		lineHeight: 14,
	},
	row: {
		marginTop: "8%",
		flexDirection: "row",
		alignItems: "center",
	},
	section: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: "10%",
	},
	paragraph: {
		fontWeight: "bold",
		marginRight: "3%",
	},
	drawerSection: {
		marginTop: "5%",
		borderTopWidth: 1,
		borderTopColor: "#f4f4f4",
	},
	bottomDrawerSection: {
		marginBottom: "5%",
		borderTopColor: "#f4f4f4",
		borderTopWidth: 1,
	},
	preference: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 12,
		paddingHorizontal: 16,
	},
});
