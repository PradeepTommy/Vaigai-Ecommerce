import React, { Component } from "react";
import {
	View,
	Text,
	StatusBar,
	FlatList,
	Dimensions,
	Image,
} from "react-native";
import {
	Container,
	Header,
	Body,
	Button,
	Title,
	Left,
	Right,
	Icon,
	Content,
	Card,
	CardItem,
} from "native-base";
import { Grid, Col } from "react-native-easy-grid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

export default class Cart extends Component {
	state = {};

	async componentDidMount() {
		const data = await AsyncStorage.getItem("cart");
		this.setState({ datas: JSON.parse(data) });
		console.warn("hv", datas);
	}

	removePeople = async ({ id }) => {
		console.warn(id);
		var data = [...this.state.datas];
		console.warn(data);
		const arr = data.filter((item) => item.id !== id);
		console.warn(arr);
		this.setState({ datas: arr });
		await AsyncStorage.setItem("cart", JSON.stringify(arr));
		// if (index > -1) {
		// 	data.splice(index, id);
		// }
	};

	renderCarousel = ({ item }) => (
		<Card style={styles.cardContainerStyle}>
			<Grid>
				<Col style={{ width: "30%" }}>
					<Image source={{ uri: item.uri }} style={styles.image} />
				</Col>
				<Col style={{ width: "60%" }}>
					<Text style={{ marginTop: "5%", color: "#979A9A" }}>{item.name}</Text>
					<Text style={{ marginTop: "2%", fontWeight: "bold", fontSize: 13 }}>
						₹ 2000{"   "}
						<Text style={styles.offer}>50% OFF</Text>
					</Text>
					<Text style={{ fontSize: 11, color: "#979A9A", marginTop: "1%" }}>
						Incl.of delivery charges & taxes
					</Text>
					<CardItem style={{ height: "15%", marginTop: "2%" }}>
						<Ionicons
							name="heart-outline"
							size={20}
							style={{ color: "#979A9A" }}
						/>
						<Text style={{ marginLeft: "5%", fontSize: 11, color: "#979A9A" }}>
							Move to WishList
						</Text>
					</CardItem>
				</Col>
				<Col style={{ width: "10%" }}>
					<Ionicons
						name="trash"
						size={20}
						style={{ color: "#979A9A", marginTop: "10%", marginLeft: "5%" }}
						onPress={() => {
							this.removePeople({ id: item.id });
						}}
					/>
				</Col>
			</Grid>
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
						<Title style={{ fontSize: 18, marginLeft: "1%" }}>My Cart</Title>
					</Body>
					<Right />
				</Header>
				<Content>
					<FlatList
						Horizontal
						showsHorizontalScrollIndicator={false}
						data={this.state.datas}
						renderItem={this.renderCarousel}
					/>
				</Content>
			</Container>
		);
	}
}

const styles = {
	cardContainerStyle: {
		marginTop: "3%",
		marginLeft: "auto",
		marginRight: "auto",
		height: Dimensions.get("window").height / 7,
		width: "100%",
	},
	image: {
		width: "80%",
		height: "80%",
		borderRadius: 5,
		overflow: "hidden",
		borderWidth: 1,
		borderColor: "#A6ACAF",
		marginTop: "auto",
		marginBottom: "auto",
		marginLeft: "auto",
		marginRight: "auto",
	},
	offer: {
		position: "absolute",
		height: 10,
		width: 50,
		backgroundColor: "red",
		alignItems: "center",
		justifyContent: "center",
		fontWeight: "normal",
		color: "white",
		fontSize: 11,
	},
};
