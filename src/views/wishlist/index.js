import React, { Component } from "react";
import {
	View,
	Text,
	Image,
	FlatList,
	StatusBar,
	Dimensions,
} from "react-native";
import {
	Container,
	Header,
	Title,
	Body,
	Left,
	Right,
	Icon,
	Button,
	Card,
	Content,
} from "native-base";
import { Grid, Col } from "react-native-easy-grid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

export default class Wishlist extends Component {
	state = {};

	async componentDidMount() {
		const data = await AsyncStorage.getItem("whislist");
		this.setState({ datas: JSON.parse(data) });
		console.warn("hv", data);
	}

	removePeople = async ({ id }) => {
		console.warn(id);
		var data = [...this.state.datas];
		console.warn(data);
		const arr = data.filter((item) => item.id !== id);
		console.warn(arr);
		await AsyncStorage.setItem("whislist", JSON.stringify(arr));
		this.setState({ datas: arr });
	};

	renderCarousel = ({ item }) => (
		<Card style={styles.cardContainerStyle}>
			<Image
				source={{ uri: item.uri }}
				style={{
					width: "100%",
					height: "70%",
					justifyContent: "center",
				}}
			/>
			<View style={styles.container}>
				<Ionicons
					name="close"
					size={15}
					style={{ color: "#7B7D7D" }}
					onPress={() => {
						this.removePeople({ id: item.id });
					}}
				/>
			</View>
			<View style={styles.offer}>
				<Text style={{ fontSize: 8, color: "#7B7D7D" }}>50% OFF</Text>
			</View>
			<View style={{ marginTop: "2%" }}>
				<Text style={{ marginLeft: "1%", fontSize: 13 }}>{item.name}</Text>
				<Text style={{ marginLeft: "1%", fontSize: 8, color: "#7B7D7D" }}>
					{item.tamilname}
				</Text>
				<Text
					style={{
						marginLeft: "3%",
						fontSize: 10,
						marginTop: "2%",
						fontWeight: "bold",
					}}>
					₹2000{"    "}
					<Text
						style={{
							textDecorationLine: "line-through",
							color: "#7B7D7D",
							fontWeight: "normal",
						}}>
						₹4000
					</Text>
				</Text>
			</View>
		</Card>
	);

	render() {
		return (
			<Container>
				<Header style={{ backgroundColor: "#1E8449" }}>
					<StatusBar backgroundColor="#1E8449" barStyle="light-content" />
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="arrow-back" />
						</Button>
					</Left>
					<Body>
						<Title style={{ fontSize: 18, marginLeft: "3%" }}>WishList</Title>
					</Body>
					<Right />
				</Header>
				<Content>
					<View style={{ marginTop: "3%" }}>
						<FlatList
							vertical
							numColumns={2}
							showsHorizontalScrollIndicator={false}
							data={this.state.datas}
							renderItem={this.renderCarousel}
						/>
					</View>
				</Content>
			</Container>
		);
	}
}

const styles = {
	cardContainerStyle: {
		marginTop: "1%",
		marginLeft: "auto",
		marginRight: "auto",
		height: Dimensions.get("window").height / 4,
		width: 190,
	},
	button: {
		marginLeft: "75%",
		backgroundColor: "#3498DB",
		marginTop: "3%",
		borderRadius: 3,
		height: 30,
		width: "20%",
	},
	container: {
		position: "absolute",
		right: 8,
		top: 35 - 50 / 2,
		height: 20,
		width: 20,
		borderRadius: 20 / 2,
		backgroundColor: "#ECF0F1",
		alignItems: "center",
		justifyContent: "center",
	},
	offer: {
		position: "absolute",
		left: 1,
		top: 155 - 50 / 2,
		height: 20,
		width: 50,
		backgroundColor: "#ECF0F1",
		alignItems: "center",
		justifyContent: "center",
	},
};
