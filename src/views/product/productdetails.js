import React, { Component } from "react";
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	FlatList,
	Dimensions,
	StatusBar,
} from "react-native";
import {
	Container,
	Header,
	Title,
	Body,
	Left,
	Right,
	Button,
	Card,
	CardItem,
	Icon,
	Footer,
	FooterTab,
	Content,
	List,
	ListItem,
} from "native-base";
import { Col, Grid } from "react-native-easy-grid";
import { Ionicons } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";

const eventslist = [
	{
		src:
			"https://image.freepik.com/free-photo/fried-eggs-drinks-breakfast_23-2147758279.jpg",
		title: "Hydralic Pump",
	},
	{
		src:
			"https://image.freepik.com/free-photo/indian-masala-egg-omelet_136595-191.jpg",
		title: "Brunch",
	},
	{
		src:
			"https://image.freepik.com/free-photo/north-indian-thali-tipical-meal-served-stainless-steel-plate-blue-table_107467-1331.jpg",
		title: "Lunch",
	},
	{
		src:
			"https://image.freepik.com/free-photo/club-sandwich-with-ham-lettuce-tomato-cheese-fries-wooden-board_140725-196.jpg",
		title: "Snacks",
	},
	{
		src:
			"https://image.freepik.com/free-photo/national-uzbek-pilaf-with-meat-cast-iron-skillet-wooden-table_127425-8.jpg",
		title: "Dinner",
	},
	{
		src:
			"https://image.freepik.com/free-photo/national-uzbek-pilaf-with-meat-cast-iron-skillet-wooden-table_127425-8.jpg",
		title: "Dinner",
	},
];

export default class ProductDetails extends Component {
	constructor() {
		super();
		this.state = {
			selectedIndex: 2,
		};
	}


  
  componentDidMount() {
    alert(this.props.navigation.state.params.id)
  }
	renderCarousel = ({ item }) => (
		<Card style={styles.cardContainerStyle}>
			<Image
				source={{ uri: item.src }}
				style={{
					width: "100%",
					height: "60%",
					marginLeft: "auto",
					marginRight: "auto",
					justifyContent: "center",
					borderTopRightRadius: 8,
					borderTopLeftRadius: 8,
				}}
			/>
			<Text
				style={{
					fontWeight: "bold",
					marginLeft: "auto",
					marginRight: "auto",
					marginTop: "5%",
				}}>
				{item.title}
			</Text>
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
						<Title style={{ fontSize: 18, marginLeft: "1%" }}>
							Product Details
						</Title>
					</Body>
					<Right>
						<TouchableOpacity
							onPress={() => this.props.navigation.navigate("Wishlist")}>
							<Icon
								name="heart"
								style={{ color: "white", marginRight: "10%" }}
							/>
						</TouchableOpacity>
					</Right>
				</Header>

				<Content>
					<View style={{ marginTop: "1%" }}>
						<Card
							style={{
								width: "90%",
								height: Dimensions.get("window").height / 6,
								marginLeft: "auto",
								marginRight: "auto",
							}}>
							<Image
								square
								style={{
									width: "100%",
									height: Dimensions.get("window").height / 6,
									marginLeft: "auto",
									marginRight: "auto",
								}}
								source={{
									uri:
										"https://image.freepik.com/free-photo/fried-eggs-drinks-breakfast_23-2147758279.jpg",
								}}
							/>
							<View style={styles.container}>
								<Icon
									name="book-outline"
									size={25}
									style={{ color: "#A6ACAF" }}
									onPress={() => this.RBSheet.open()}
								/>
							</View>
						</Card>

						<View style={{ marginTop: "5%", marginLeft: "5%" }}>
							<Text style={{ fontWeight: "bold", fontSize: 16 }}>
								Hydralic Pump
							</Text>
							<Text style={{ fontSize: 13, color: "#BDC3C7" }}>
								ஹைட்ராலிக் பம்ப்
							</Text>
							<Text
								style={{ fontWeight: "bold", fontSize: 16, marginTop: "1%" }}>
								₹ 1000
							</Text>
							<Grid>
								<Col>
									<Text
										style={{
											fontSize: 13,
											textDecorationLine: "line-through",
											color: "#BDC3C7",
										}}>
										2000
									</Text>
								</Col>
								<Col style={{ marginRight: "75%" }}>
									<Text
										style={{
											fontWeight: "bold",
											fontSize: 12,
											marginTop: "3%",
											color: "#1ABC9C",
										}}>
										50% off
									</Text>
								</Col>
							</Grid>
						</View>

						<Grid style={{ marginTop: "2%" }}>
							<Col style={{ marginLeft: "5%", width: "15%" }}>
								<Button bordered block success>
									<Ionicons name="share-social" size={25} color="green" />
								</Button>
							</Col>
							<Col style={{ marginLeft: "5%", width: "33%" }}>
								<Button block success iconLeft>
									<Icon name="cart" style={{ marginRight: "8%" }} />
									<Text style={{ color: "white", marginRight: "8%" }}>
										Add to Cart
									</Text>
								</Button>
							</Col>
							<Col style={{ marginLeft: "5%", width: "33%" }}>
								<Button bordered block danger iconLeft>
									<Icon name="heart-outline" style={{ marginRight: "10%" }} />
									<Text style={{ marginRight: "8%" }}>WishList</Text>
								</Button>
							</Col>
						</Grid>

						<View style={{ marginTop: "2%", marginLeft: "5%" }}>
							<Text style={{ fontWeight: "bold", fontSize: 16 }}>
								Key Feature
							</Text>
							<Card transparent>
								<CardItem>
									<Text>
										This durable pump is made with stainless steel material.
									</Text>
								</CardItem>
							</Card>
						</View>

						<View style={{ marginTop: "2%", marginLeft: "5%" }}>
							<Text style={{ fontWeight: "bold", fontSize: 16 }}>General</Text>
							<List>
								<ListItem>
									<Left>
										<Text style={{ color: "#A6ACAF" }}>Designed For</Text>
									</Left>
									<Body>
										<Text>Claas</Text>
									</Body>
									<Right />
								</ListItem>
								<ListItem>
									<Left>
										<Text style={{ color: "#A6ACAF" }}>Color</Text>
									</Left>
									<Body>
										<Text>Green</Text>
									</Body>
									<Right />
								</ListItem>
								<ListItem>
									<Left>
										<Text style={{ color: "#A6ACAF" }}>Generic Name</Text>
									</Left>
									<Body>
										<Text>Water Pump</Text>
									</Body>
									<Right />
								</ListItem>
								<ListItem>
									<Left>
										<Text style={{ color: "#A6ACAF" }}>Country Of Orgin</Text>
									</Left>
									<Body>
										<Text>India</Text>
									</Body>
									<Right />
								</ListItem>
							</List>
						</View>

						<View style={{ marginTop: "2%", marginLeft: "5%" }}>
							<Text style={{ fontWeight: "bold", fontSize: 16 }}>
								Description
							</Text>
							<Card style={{ width: "90%" }} transparent>
								<CardItem>
									<Body>
										<Text>
											This is just a transparent card with some text to
											boot.This is just a transparent card with some text to
											boot. This is just a transparent card with some text to
											boot.This is just a transparent card with some text to
											boot.
										</Text>
									</Body>
								</CardItem>
							</Card>
						</View>

						<RBSheet
							ref={(ref) => {
								this.RBSheet = ref;
							}}
							height={Dimensions.get("window").height / 4}
							openDuration={250}
							customStyles={{ container: { borderRadius: 15 } }}>
							<View style={{ marginTop: "2%", marginLeft: "5%" }}>
								<Text style={{ fontWeight: "bold", fontSize: 16 }}>
									Related Product
								</Text>
								<FlatList
									horizontal
									showsHorizontalScrollIndicator={false}
									data={eventslist}
									renderItem={this.renderCarousel}
									style={{ marginTop: "5%" }}
								/>
							</View>
						</RBSheet>
					</View>
				</Content>

				<Footer style={{ color: "white" }}>
					<FooterTab style={{ color: "white" }}>
						<Button
							style={{
								backgroundColor: "white",
								borderTopColor: "#f4f4f4",
								borderTopWidth: 1,
							}}
							onPress={() => this.props.navigation.navigate("Cart")}>
							<Text style={{ fontWeight: "bold", fontSize: 15 }}>
								Go To Cart
							</Text>
						</Button>
						<Button style={{ backgroundColor: "orange" }}>
							<Text
								style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
								Buy Now
							</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}

const styles = {
	cardContainerStyle: {
		borderRadius: 8,
		marginLeft: 8,
		height: Dimensions.get("window").height / 7,
		width: 140,
	},
	container: {
		position: "absolute",
		right: 10,
		top: 140 - 50 / 2,
		height: 50,
		width: 50,
		borderRadius: 50 / 2,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		borderColor: "#E5E7E9",
		borderWidth: 1,
	},
	rate: {
		position: "absolute",
		right: 10,
		top: 140 - 50 / 2,
		height: 20,
		width: 50,
		borderRadius: 50 / 3,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		borderColor: "#E5E7E9",
		borderWidth: 1,
	},
};
