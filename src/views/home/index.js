import React, { Component } from "react";
import {
	View,
	Text,
	Image,
	StatusBar,
	FlatList,
	AsyncStorage,
	Dimensions,
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
	Icon,
	Content, Spinner
} from "native-base";
import Swiper from "react-native-web-swiper";
import { Col, Grid } from "react-native-easy-grid";
import { Ionicons } from "@expo/vector-icons";

import Languages from "../../language";
import Server from "../../function/server";

import First from "../../../assets/77.jpg";
import Second from "../../../assets/76.jpg";
import Third from "../../../assets/78.jpg";

export default class Home extends Component {
	state = {};

	async componentDidMount() {
		const language = await AsyncStorage.getItem("login");
		this.setState({ result: language });
		this.getHomeItems();
	}

	groupByKey = (array, key) => {
		const tmpData = array.reduce((hash, obj) => {
			if (obj[key] === undefined) return hash;
			return Object.assign(hash, {
				[obj[key]]: (hash[obj[key]] || []).concat(obj),
			});
		}, {});
		return tmpData;
	};

	getHomeItems = () => {
		let url = Server() + "gethomeitems.php";
		this.setState({load: true});
		fetch(url, {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "multipart/form-data",
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((response) => {
				let temp = this.groupByKey(response, "type");
				this.setState({ data: temp, load: false });
			})
			.catch((e) => {
				console.log(error);
				this.setState({ load: false });
			});
	};

	renderCarousel = ({ item }) => (
		<Card style={styles.cardContainerStyle}>
			<Image
				source={{
					uri: `https://s3.ap-south-1.amazonaws.com/vaigaiclaas.com/${item.type.toLowerCase()}/${
						item.id
					}.jpg`,
				}}
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
			<View style={{ marginTop: "10%" }}>
				<Left>
					<Text style={{ fontWeight: "bold", marginRight: "20%" }}>
						{item.name}
					</Text>
				</Left>
				<Right>
					<Icon style={{ marginLeft: "75%" }} name="heart-outline" />
				</Right>
			</View>
		</Card>
	);

	render() {
		return (
			<Container>
				<Header style={{ backgroundColor: "#1E8449" }}>
					<StatusBar backgroundColor="#1E8449" barStyle="light-content" />
					<Left>
						<Button
							transparent
							onPress={() => this.props.navigation.openDrawer()}>
							<Icon name="menu" />
						</Button>
					</Left>
					<Body>
						<Title style={{ fontSize: 18, marginLeft: "3%" }}>HOME</Title>
					</Body>
					<Right />
				</Header>

				<Content>
					<View
						style={{
							height: Dimensions.get("window").height / 5,
							width: "100%",
						}}>
						<Swiper controlsProps={{ prevPos: false, nextPos: false }}>
							<View style={{ flex: 1 }}>
								<Image
									source={First}
									style={{ width: "100%", height: "75%" }}
								/>
							</View>
							<View style={{ flex: 1 }}>
								<Image
									source={Second}
									style={{ width: "100%", height: "75%" }}
								/>
							</View>
							<View style={{ flex: 1 }}>
								<Image
									source={Third}
									style={{ width: "100%", height: "75%" }}
								/>
							</View>
						</Swiper>
					</View>

					{/* {this.state.data
						? this.state.data.map()
						: null} */}

					<View>
						<Grid
							style={{ width: "93%", marginLeft: "auto", marginRight: "auto" }}>
							<Col style={styles.col}>
								<View>
									<Left>
										<Text
											style={{
												marginRight: "75%",
												marginTop: "3%",
												fontWeight: "bold",
												fontSize: 15,
												color: "#3498DB",
											}}>
											{Languages.category[this.state.result]}
										</Text>
									</Left>
									<Right>
										<Button
											block
											style={styles.button}
											iconRight
											onPress={() =>
												this.props.navigation.navigate("ViewAll", {
													header: "Category",
													result: this.state.data["Category"],
												})
											}>
											<Text
												style={{
													fontSize: 12,
													fontWeight: "bold",
													color: "white",
													marginRight: "auto",
													marginLeft: "auto",
												}}>
												{Languages.viewAll[this.state.result]}
											</Text>
											<Ionicons
												name="chevron-forward-sharp"
												size={15}
												style={{ color: "white" }}
											/>
										</Button>
									</Right>
								</View>
							</Col>
						</Grid>
						{ this.state.data ? 
							<FlatList
								horizontal
								showsHorizontalScrollIndicator={false}
								data={this.state.data ? this.state.data["Category"] : []}
								renderItem={this.renderCarousel}
							/>:
							<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
							<Spinner color="green" size={40}/>
							<Text>Loading</Text>
							</View>
	                    }
					</View>

					<View style={{ marginTop: "1%" }}>
						<Grid
							style={{ width: "93%", marginLeft: "auto", marginRight: "auto" }}>
							<Col style={styles.col}>
								<View>
									<Left>
										<Text
											style={{
												marginRight: "75%",
												marginTop: "3%",
												fontWeight: "bold",
												fontSize: 15,
												color: "#3498DB",
											}}>
											{Languages.set[this.state.result]}
										</Text>
									</Left>
									<Right>
										<Button
											block
											style={styles.button}
											iconRight
											onPress={() =>
												this.props.navigation.navigate("ViewAll", {
													header: "Set",
													result: this.state.data["Set"],
												})
											}>
											<Text
												style={{
													fontSize: 12,
													fontWeight: "bold",
													color: "white",
													marginRight: "auto",
													marginLeft: "auto",
												}}>
												{Languages.viewAll[this.state.result]}
											</Text>
											<Ionicons
												name="chevron-forward-sharp"
												size={15}
												style={{ color: "white" }}
											/>
										</Button>
									</Right>
								</View>
							</Col>
						</Grid>
						{ this.state.data ?
							<FlatList
								horizontal
								showsHorizontalScrollIndicator={false}
								data={this.state.data ? this.state.data["Set"] : []}
								renderItem={this.renderCarousel}
							/>: 
							<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
							<Spinner color="green" size={40}/>
							<Text>Loading</Text>
							</View>
						}
					</View>

					<View style={{ marginTop: "1%" }}>
						<Grid
							style={{ width: "93%", marginLeft: "auto", marginRight: "auto" }}>
							<Col style={styles.col}>
								<View>
									<Left>
										<Text
											style={{
												marginRight: "75%",
												marginTop: "3%",
												fontWeight: "bold",
												fontSize: 15,
												color: "#3498DB",
											}}>
											{Languages.combo[this.state.result]}
										</Text>
									</Left>
									<Right>
										<Button
											block
											style={styles.button}
											iconRight
											onPress={() =>
												this.props.navigation.navigate("ViewAll", {
													header: "Combo",
													result: this.state.data["Combo"],
												})
											}>
											<Text
												style={{
													fontSize: 12,
													fontWeight: "bold",
													color: "white",
													marginRight: "auto",
													marginLeft: "auto",
												}}>
												{Languages.viewAll[this.state.result]}
											</Text>
											<Ionicons
												name="chevron-forward-sharp"
												size={15}
												style={{ color: "white" }}
											/>
										</Button>
									</Right>
								</View>
							</Col>
						</Grid>
						{ this.state.data ?
							<FlatList
								horizontal
								showsHorizontalScrollIndicator={false}
								data={this.state.data ? this.state.data["Combo"] : []}
								renderItem={this.renderCarousel}
							/>:
							<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
							<Spinner color="green" size={40}/>
							<Text>Loading</Text>
							</View>
						}
					</View>

					<View style={{ marginTop: "1%" }}>
						<Grid
							style={{ width: "93%", marginLeft: "auto", marginRight: "auto" }}>
							<Col style={styles.col}>
								<View>
									<Left>
										<Text
											style={{
												marginRight: "75%",
												marginTop: "3%",
												fontWeight: "bold",
												fontSize: 15,
												color: "#3498DB",
											}}>
											{Languages.section[this.state.result]}
										</Text>
									</Left>
									<Right>
										<Button
											block
											style={styles.button}
											iconRight
											onPress={() =>
												this.props.navigation.navigate("ViewAll", {
													header: "Section",
													result: this.state.data["Section"],
												})
											}>
											<Text
												style={{
													fontSize: 12,
													fontWeight: "bold",
													color: "white",
													marginRight: "auto",
													marginLeft: "auto",
												}}>
												{Languages.viewAll[this.state.result]}
											</Text>
											<Ionicons
												name="chevron-forward-sharp"
												size={15}
												style={{ color: "white" }}
											/>
										</Button>
									</Right>
								</View>
							</Col>
						</Grid>
						{ this.state.data ?
							<FlatList
								horizontal
								showsHorizontalScrollIndicator={false}
								data={this.state.data ? this.state.data["Section"] : []}
								renderItem={this.renderCarousel}
							/>:
							<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
							<Spinner color="green" size={40}/>
							<Text>Loading</Text>
							</View>
						}
					</View>

					<View style={{ marginTop: "1%" }}>
						<Grid
							style={{ width: "93%", marginLeft: "auto", marginRight: "auto" }}>
							<Col style={styles.col}>
								<View>
									<Left>
										<Text
											style={{
												marginRight: "75%",
												marginTop: "3%",
												fontWeight: "bold",
												fontSize: 15,
												color: "#3498DB",
											}}>
											{Languages.model[this.state.result]}
										</Text>
									</Left>
									<Right>
										<Button
											block
											style={styles.button}
											iconRight
											onPress={() =>
												this.props.navigation.navigate("ViewAll", {
													header: "Model",
													result: this.state.data["Model"],
												})
											}>
											<Text
												style={{
													fontSize: 12,
													fontWeight: "bold",
													color: "white",
													marginRight: "auto",
													marginLeft: "auto",
												}}>
												{Languages.viewAll[this.state.result]}
											</Text>
											<Ionicons
												name="chevron-forward-sharp"
												size={15}
												style={{ color: "white" }}
											/>
										</Button>
									</Right>
								</View>
							</Col>
						</Grid>
						{ this.state.data ? 
							<FlatList
								horizontal
								showsHorizontalScrollIndicator={false}
								data={this.state.data ? this.state.data["Model"] : []}
								renderItem={this.renderCarousel}
							/>:
							<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
							<Spinner color="green" size={40}/>
							<Text>Loading</Text>
							</View>
						}			
					</View>
				</Content>
			</Container>
		);
	}
}

const styles = {
	cardContainerStyle: {
		borderRadius: 8,
		marginLeft: 10,
		height: Dimensions.get("window").height / 6.2,
		width: 170,
	},
	col: {
		height: 50,
	},
	button: {
		marginLeft: "77%",
		backgroundColor: "#3498DB",
		marginTop: "1%",
		borderRadius: 3,
		height: Dimensions.get("window").height / 23,
		width: "20%",
	},
};
