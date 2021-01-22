import React, { Component } from 'react';
import { View, Text, StatusBar, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Container, Header, Body, Button, Title, Left, Right, Icon, Content, Card,  } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';

const eventslist = [
  {
    src:
      'https://image.freepik.com/free-photo/fried-eggs-drinks-breakfast_23-2147758279.jpg',
    title: 'Hydralic Pump',
    color: 'Green',
    for: 'motor Pump',
    price: '2000',
    discount: '4000',
    offer: '50',
  },
  {
    src:
      'https://image.freepik.com/free-photo/indian-masala-egg-omelet_136595-191.jpg',
    title: 'Hydralic Generator',
    color: 'red',
    for: 'generator',
    price: '1000',
    discount: '2000',
    offer: '40',
  },
];

export default class Cart extends Component {

  renderCarousel = ({item}) => (
    <Card style={styles.cardContainerStyle}>
      <Grid >
        <Col style={{ backgroundColor: 'white', height: '80%'}}>
          <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: '2%', marginLeft: '2%'}}>{item.title}</Text>
          <Text style={{color: '#839192', marginTop: '2%', marginLeft: '2%'}}>{item.color}  {item.for}</Text>
        </Col>
        <Col style={{width: '30%',}}>
          <Image source={{uri: item.src}} style={{width: '100%', height: "100%", }}/>
        </Col>
      </Grid>
      <Grid style={{marginTop: '2%'}}>
        <Col>
          <Text style={{fontWeight: 'bold', marginLeft: '2%'}}>₹{item.price}
            <Text style={{ color: 'green', fontSize:10, }}> ({item.offer}% off)</Text>
           </Text>
          <Text style={{color: '#839192', textDecorationLine: 'line-through',  marginLeft: '2%'}}>₹{item.discount}</Text>
        </Col>
      </Grid>
      <Grid>
        <Col style={{ marginTop: '5%'}}>
          <Button bordered block style={{backgroundColor: 'white', borderColor: '#f4f4f4'}}>
            <Text>Save</Text>
          </Button>
        </Col>
          <Col style={{marginTop: '5%'}}>
            <Button bordered block style={{backgroundColor: 'white', borderColor: '#f4f4f4'}}>
              <Text>Remove</Text>
            </Button>
          </Col>
      </Grid>
    </Card>
  );

  render() {
    return(
      <Container>
        <Header style={{backgroundColor: '#1E8449'}} >
          <StatusBar backgroundColor='#1E8449' barStyle='light-content' />
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{ fontSize: 18, marginLeft: '1%' }}>My Cart</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <FlatList Horizontal showsHorizontalScrollIndicator={false} data={eventslist}
            renderItem={this.renderCarousel} />
        </Content>
      </Container>
    )
  }
}

const styles = {
  cardContainerStyle: {  marginTop: '3%',  marginLeft: "auto", marginRight: 'auto',
     height: Dimensions.get('window').height/4, width: "100%",
  },
};
