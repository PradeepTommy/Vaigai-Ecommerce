import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,
  ImageBackground,
  FlatList, ScrollView, AsyncStorage,
  TouchableWithoutFeedback,} from 'react-native';
import { Container, Header, Title, Body, Left, Right, Button, Card, CardItem, Icon, Content } from 'native-base';
import Swiper from "react-native-web-swiper";
import { Col, Row, Grid } from 'react-native-easy-grid';

import Languages from '../../language';

import First from '../../../assets/77.jpg';
import Second from '../../../assets/76.jpg';
import Third from '../../../assets/78.jpg';

const eventslist = [
  {
    src:
      'https://image.freepik.com/free-photo/fried-eggs-drinks-breakfast_23-2147758279.jpg',
    title: 'Breakfast',
  },
  {
    src:
      'https://image.freepik.com/free-photo/indian-masala-egg-omelet_136595-191.jpg',
    title: 'Brunch',
  },
  {
    src:
      'https://image.freepik.com/free-photo/north-indian-thali-tipical-meal-served-stainless-steel-plate-blue-table_107467-1331.jpg',
    title: 'Lunch',
  },
  {
    src:
      'https://image.freepik.com/free-photo/club-sandwich-with-ham-lettuce-tomato-cheese-fries-wooden-board_140725-196.jpg',
    title: 'Snacks',
  },
  {
    src:
      'https://image.freepik.com/free-photo/national-uzbek-pilaf-with-meat-cast-iron-skillet-wooden-table_127425-8.jpg',
    title: 'Dinner',
  },
  {
    src:
      'https://image.freepik.com/free-photo/national-uzbek-pilaf-with-meat-cast-iron-skillet-wooden-table_127425-8.jpg',
    title: 'Dinner',
  },
];
export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: '',
    };
  }

componentDidMount() {
  AsyncStorage.getItem('login', (err, result) => {
        console.log(result);
      })
}


  keyExtractor = (item, index) => index.toString();
  renderCarousel = ({item}) => (
    <Card style={styles.cardContainerStyle}>
        <Image source={{uri: item.src}} style={{width: '80%', height: "60%", marginLeft: 'auto', marginRight: 'auto',
           justifyContent: 'center', marginTop: '5%'}} />
         <Text style={{fontWeight: 'bold',  marginLeft: 'auto', marginRight: 'auto', marginTop: '5%'}}>{item.title}</Text>
    </Card>
  );

  render() {
    return(
      <Container>
        <Header style={{backgroundColor: '#1E8449'}}>
          <Body>
            <Title style={{ fontSize: 18, marginLeft: '3%' }}>HOME</Title>
          </Body>
        </Header>
        <Content>
        <View style={{height: "25%",  width: "100%"}}>
          <Swiper controlsProps={{prevPos: false, nextPos: false}}>
            <View style={{ flex: 1,}} >
              <Image source={First} style={{width: "100%", height: '75%',}} />
            </View>
            <View style={{ flex: 1, }}>
              <Image source={Second} style={{width: "100%", height: '75%',}} />
            </View>
            <View style={{ flex: 1, }}>
              <Image source={Third} style={{width: "100%", height: '75%',}} />
            </View>
          </Swiper>
        </View>


        <View>
        <Grid style={{ width: '93%', marginLeft: 'auto', marginRight: 'auto'}}>
          <Col style={styles.col}>
            <View>
              <Left>
                <Text style={{marginRight: '75%', marginTop: '3%', fontWeight: 'bold', fontSize: 15, color: '#3498DB'}}>
                  {Languages.product[this.props.navigation.state.params.id]}
                </Text>
              </Left>
              <Right>
                <Button block style={styles.button}
                  onPress={() => this.props.navigation.navigate("ViewAll", {header: "Product"})} data={this.state.eventslist}>
                  <Text style={{fontSize: 8 , color: 'white',  marginRight: 'auto', marginLeft: 'auto'}}>
                    {Languages.viewAll[this.props.navigation.state.params.id]}
                  </Text>
                </Button>
              </Right>
            </View>
          </Col>
        </Grid>
        <FlatList horizontal showsHorizontalScrollIndicator={false} keyExtractor={this.keyExtractor} data={eventslist}
          renderItem={this.renderCarousel} />
        </View>


        <View style={{marginTop: '1%'}}>
        <Grid style={{ width: '93%',  marginLeft: 'auto', marginRight: 'auto'}}>
          <Col  style={styles.col}>
            <View>
              <Left>
                <Text style={{marginRight: '70%', marginTop: '3%', fontWeight: 'bold', fontSize: 15, color: '#3498DB'}}>
                    {Languages.category[this.props.navigation.state.params.id]}
                </Text>
              </Left>
              <Right>
                <Button block style={styles.button}
                  onPress={() => this.props.navigation.navigate("ViewAll", {header: "Category"})}>
                  <Text style={{fontSize: 8, color: 'white',  marginRight: 'auto', marginLeft: 'auto'}}>
                    {Languages.viewAll[this.props.navigation.state.params.id]}
                  </Text>
                </Button>
              </Right>
            </View>
          </Col>
        </Grid>
          <FlatList horizontal showsHorizontalScrollIndicator={false} keyExtractor={this.keyExtractor} data={eventslist}
            renderItem={this.renderCarousel} />
        </View>


        <View style={{marginTop: '1%'}}>
          <Grid style={{ width: '93%',  marginLeft: 'auto', marginRight: 'auto'}}>
            <Col  style={styles.col}>
              <View>
                <Left>
                  <Text style={{marginRight: '70%', marginTop: '3%', fontWeight: 'bold', fontSize: 15, color: '#3498DB'}}>
                    {Languages.category[this.props.navigation.state.params.id]}
                  </Text>
                </Left>
                <Right>
                  <Button  block style={styles.button}
                    onPress={() => this.props.navigation.navigate("ViewAll", {header: "Assembly"})}>
                    <Text style={{fontSize: 8, color: 'white',  marginRight: 'auto', marginLeft: 'auto'}}>
                      {Languages.viewAll[this.props.navigation.state.params.id]}</Text>
                  </Button>
                </Right>
              </View>
            </Col>
          </Grid>
          <FlatList horizontal showsHorizontalScrollIndicator={false} keyExtractor={this.keyExtractor} data={eventslist}
            renderItem={this.renderCarousel} />
        </View>

        </Content>
      </Container>
    )
  }
}

const styles = {
  cardContainerStyle: {
     borderRadius: 8,  marginLeft: 10, height: 130, width: 140,
  },
  col: {
    height: 50,
  },
  button: {
    marginLeft: '75%', backgroundColor: '#3498DB', marginTop: '3%', borderRadius: 3, height: 30, width: '20%',
  }
};
