import React, {Component } from 'react';
import { View, Text, StyleSheet, Image,
  ImageBackground,
  FlatList, ScrollView, TouchableOpacity,
  TouchableWithoutFeedback,} from 'react-native';
import { Container, Header, Title, Body, Left, Right, Button, Card, CardItem, Icon, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import First from '../../../assets/77.jpg';


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

export default class ViewAll extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: '',
    };
  }

  render() {
    return(
      <Container>
        <Header style={{backgroundColor: '#1E8449'}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{ fontSize: 18, marginLeft: '3%' }}>{this.props.navigation.state.params.header}</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={{  marginTop:'5%'}}>
            <Grid style={{marginLeft: 'auto', marginRight: 'auto',}}>
              <Col style={{marginLeft: '5%'}}>
                  <Card style={styles.cardContainerStyle} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("ProductDetails")}>
                      <Image source={{uri: 'https://image.freepik.com/free-photo/fried-eggs-drinks-breakfast_23-2147758279.jpg'}}
                         style={{width: '80%', height: "70%", marginLeft: 'auto', marginRight: 'auto', marginTop: '5%'}} />
                    </TouchableOpacity>
                      <View>
                        <Left>
                          <Text style={{fontWeight: 'bold', marginRight: '30%', }}>Hydralic Pump</Text>
                        </Left>
                        <Right>
                         <Icon style={{marginLeft: '70%',}} name="add-circle" />
                        </Right>
                      </View>
                  </Card>
              </Col>
                <Col style={{marginRight: '5%'}}>
                    <Card style={styles.cardContainerStyle} >
                      <TouchableOpacity onPress={() => this.props.navigation.navigate("ProductDetails")}>
                        <Image source={{uri: 'https://image.freepik.com/free-photo/indian-masala-egg-omelet_136595-191.jpg'}}
                           style={{width: '80%', height: "70%", marginLeft: 'auto', marginRight: 'auto', marginTop: '5%'}} />
                      </TouchableOpacity>
                        <View>
                          <Left>
                            <Text style={{fontWeight: 'bold', marginRight: '30%', }}>Product 2</Text>
                          </Left>
                          <Right>
                           <Icon style={{marginLeft: '70%',}} name="add-circle" />
                          </Right>
                        </View>
                    </Card>
                </Col>
            </Grid>
          </View>
            <View style={{  marginTop:'3%'}}>
              <Grid style={{marginLeft: 'auto', marginRight: 'auto',}}>
                <Col style={{marginLeft: '5%'}}>
                    <Card style={styles.cardContainerStyle} >
                      <TouchableOpacity onPress={() => this.props.navigation.navigate("ProductDetails")}>
                        <Image source={{uri: 'https://image.freepik.com/free-photo/north-indian-thali-tipical-meal-served-stainless-steel-plate-blue-table_107467-1331.jpg'}}
                           style={{width: '80%', height: "70%", marginLeft: 'auto', marginRight: 'auto', marginTop: '5%'}} />
                      </TouchableOpacity>
                        <View>
                          <Left>
                            <Text style={{fontWeight: 'bold', marginRight: '30%', }}>Product 3</Text>
                          </Left>
                          <Right>
                           <Icon style={{marginLeft: '70%',}} name="add-circle" />
                          </Right>
                        </View>
                    </Card>
                </Col>
                <Col style={{marginRight: '3%'}}>
                  <Card style={styles.cardContainerStyle} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("ProductDetails")}>
                      <Image source={{uri: 'https://image.freepik.com/free-photo/club-sandwich-with-ham-lettuce-tomato-cheese-fries-wooden-board_140725-196.jpg'}}
                           style={{width: '80%', height: "70%", marginLeft: 'auto', marginRight: 'auto', marginTop: '5%'}} />
                      </TouchableOpacity>
                      <View>
                        <Left>
                          <Text style={{fontWeight: 'bold', marginRight: '30%', }}>Product 4</Text>
                        </Left>
                        <Right>
                          <Icon style={{marginLeft: '70%',}} name="add-circle" />
                        </Right>
                    </View>
                  </Card>
                </Col>
              </Grid>
            </View>
              <View style={{  marginTop:'3%'}}>
                <Grid style={{marginLeft: 'auto', marginRight: 'auto',}}>
                  <Col  style={{marginLeft: '5%'}}>
                      <Card style={styles.cardContainerStyle} >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("ProductDetails")}>
                          <Image source={{uri: 'https://image.freepik.com/free-photo/national-uzbek-pilaf-with-meat-cast-iron-skillet-wooden-table_127425-8.jpg'}}
                             style={{width: '80%', height: "70%", marginLeft: 'auto', marginRight: 'auto', marginTop: '5%'}} />
                        </TouchableOpacity>
                          <View>
                            <Left>
                              <Text style={{fontWeight: 'bold', marginRight: '30%', }}>Product 5</Text>
                            </Left>
                            <Right>
                             <Icon style={{marginLeft: '70%',}} name="add-circle" />
                            </Right>
                          </View>
                      </Card>
                  </Col>
                    <Col style={{marginRight: '3%'}}>
                        <Card style={styles.cardContainerStyle} >
                          <TouchableOpacity onPress={() => this.props.navigation.navigate("ProductDetails")}>
                            <Image source={{uri: 'https://image.freepik.com/free-photo/national-uzbek-pilaf-with-meat-cast-iron-skillet-wooden-table_127425-8.jpg'}}
                               style={{width: '80%', height: "70%", marginLeft: 'auto', marginRight: 'auto', marginTop: '5%'}} />
                          </TouchableOpacity>
                            <View>
                              <Left>
                                <Text style={{fontWeight: 'bold', marginRight: '30%', }}>Product 6</Text>
                              </Left>
                              <Right>
                               <Icon style={{marginLeft: '70%',}} name="add-circle" />
                              </Right>
                            </View>
                        </Card>
                    </Col>
                </Grid>
              </View>
        </Content>
      </Container>
    )
  }
}

const styles = {
  cardContainerStyle: { borderRadius: 8,  marginLeft: 5, height: 150, width: 175,
  },
  col: {
    height: 70,
  }
};
