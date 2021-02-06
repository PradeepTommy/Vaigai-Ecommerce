import React, { Component } from "react";
import {
	View,
	Text,
	Image,
	Dimensions,
	StatusBar,
	FlatList,
	TouchableOpacity,
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
	Content,
} from "native-base";
import { Col, Grid } from "react-native-easy-grid";
import RBSheet from "react-native-raw-bottom-sheet";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class ViewAll extends Component {

	state = {};

	submit = async () => {
		try {
			// await AsyncStorage.clear();
			let test=[]
			const data2 = await AsyncStorage.getItem('cart');
			console.warn('ss', data2)
			// csonst data3 = data2 ? data2.push([this.state]): [this.state];
			if(data2 !== null){
				test = JSON.parse(data2);
				test.push(this.state)
			}else{
				test.push(this.state)
			}	
			 console.warn("gbhn",test)
			 await AsyncStorage.setItem('cart', JSON.stringify(test));
			//  console.warn("gbhn",data3)
			//  setTimeout(async()=>{ const data4 = await AsyncStorage.getItem('cart');
			//  console.warn('ee',data4)
			// },500)
			
		} catch (error) {
			// Error saving data
		}
	}

	renderCarousel = ({ item }) => (
		<Card style={styles.cardContainerStyle}>
			<TouchableOpacity
				onPress={() => this.props.navigation.navigate("Stacks", {
					screen: "ProductDetails",
					params: {
						id: item.id,
					},
				} )}>
				<Image
					source={{
						uri: `https://s3.ap-south-1.amazonaws.com/vaigaiclaas.com/${item.type.toLowerCase()}/${item.id}.jpg`,
					}}
					style={{
						width: "80%",
						height: "70%",
						marginLeft: "auto",
						marginRight: "auto",
						marginTop: "5%",
					}}
				/>
			</TouchableOpacity>
			<View>
				<Left>
					<Text style={{ fontWeight: "bold", marginRight: "30%" }}>
						{item.name}
					</Text>
				</Left>
				<Right>
					<Icon
						style={{ marginLeft: "70%" }}
						name="add-circle"
						onPress={() => {
							this.setState({
								uri: `https://s3.ap-south-1.amazonaws.com/vaigaiclaas.com/${item.type.toLowerCase()}/${item.id}.jpg`,
								name: item.name,
								id: item.id, 
								tamilname: item.tamil_name,
								type: item.type,
							});
							this.RBSheet.open();
						}}
					/>
				</Right>
			</View>
		</Card>
	);

	render() {
		const {result} = this.props.route.params;
		return (
			<Container>
				<Content>
          
					<FlatList
						vertical
						numColumns={2}
						showsHorizontalScrollIndicator={false}
						data={
							result
								? result
								: []
						}
						renderItem={this.renderCarousel}
					/>

					<RBSheet
						ref={(ref) => {
							this.RBSheet = ref;
						}}
						height={Dimensions.get("window").height / 3}
						openDuration={250}
						customStyles={{ container: { borderRadius: 15 } }}>
						<View style={{ marginTop: "5%" }}>
							<Text
								style={{ fontWeight: "bold", marginLeft: "5%", fontSize: 20 }}>
								{this.state.name}
							</Text>
							<Card transparent style={styles.cardStyle}>
								<Grid>
									<Col style={{ width: "40%" }}>
										<Image
											source={{ uri: this.state.uri }}
											style={{
												width: "70%",
												height: "70%",
												marginLeft: "10%",
												justifyContent: "center",
												marginTop: "auto",
												marginBottom: "auto",
											}}
										/>
									</Col>
									<Col style={{ width: "50%" }}>
										<Text
											style={{
												fontWeight: "bold",
												fontSize: 16,
												marginTop: "10%",
											}}>
											{this.state.name}
										</Text>
										<Text style={{ fontSize: 15, color: "#CACFD2" }}>
											₹2000
										</Text>
										<Text style={{ fontSize: 14, color: "#CACFD2" }}>
											Green, Guaranteed
										</Text>
									</Col>
								</Grid>
							</Card>
							<Grid style={{ marginTop: "1%" }}>
								<Col style={{ marginLeft: "5%", width: "42%" }}>
									<Button block success iconLeft onPress={this.submit}>
										<Icon name="cart" style={{ marginRight: "8%" }} />
										<Text
											style={{
												color: "white",
												marginRight: "8%",
												fontWeight: "bold",
											}}>
											Add to Cart
										</Text>
									</Button>
								</Col>
								<Col style={{ marginLeft: "5%", width: "42%" }}>
									<Button
										block
										iconLeft
										style={{ backgroundColor: "orange", color: "orange" }}>
										<Text
											style={{
												marginRight: "auto",
												marginLeft: "auto",
												color: "white",
												fontWeight: "bold",
											}}>
											Shop Now
										</Text>
									</Button>
								</Col>
							</Grid>
						</View>
					</RBSheet>
				</Content>
			</Container>
		);
	}
}

const styles = {
	cardContainerStyle: {
		borderRadius: 8,
		marginTop: "3%",
		marginLeft: "auto",
		marginRight: "auto",
		height: Dimensions.get("window").height / 5.7,
		width: 185,
	},
	cardStyle: {
		borderRadius: 8,
		marginLeft: "auto",
		marginRight: "auto",
		height: Dimensions.get("window").height / 6,
		width: "90%",
		marginTop: "3%",
	},
};
