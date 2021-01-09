import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView, AsyncStorage, TouchableWithoutFeedback} from 'react-native';
import { Container, Header, Title, Body, Left, Right, Button, Card, CardItem, Icon,
   Content, List, ListItem, Thumbnail } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { ButtonGroup } from 'react-native-elements';
import { MenuContext, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

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
   ];

 const component1 = () => <Icon name="cart" style={{color: '#3498DB'}}/>
 const component2 = () => <Icon name="heart" style={{color: 'red'}} />

export default class ProductDetails extends Component {

  constructor () {
  super()
  this.state = {
    selectedIndex: 2
  }
}

updateIndex (selectedIndex) {
  this.setState({selectedIndex})
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
  const buttons = [{ element: component1 }, { element: component2 }]
  const { selectedIndex } = this.state
    return(
      <MenuContext>
        <Container>
          <Header style={{backgroundColor: '#1E8449'}}>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title style={{ fontSize: 18, marginLeft: '1%' }}>Product Details</Title>
            </Body>
            <Right>
              <TouchableOpacity onPress= {() => this.props.navigation.navigate("Wishlist")}>
                <Icon name="heart" style={{color: 'white', marginRight: '10%'}} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="person" style={{color: 'white', marginRight: '10%'}} />
              </TouchableOpacity>
            </Right>
          </Header>
          <View style={{marginTop: '1%'}}>
            <Image square style={{ width: '90%',height: "25%", marginLeft: 'auto', marginRight: 'auto' }}
                 source={{ uri: 'https://image.freepik.com/free-photo/fried-eggs-drinks-breakfast_23-2147758279.jpg'}} />
            <View style={{marginTop: '2%', marginLeft: '5%'}}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>Hydralic Pump</Text>
              <Text style={{ fontSize: 13, color: '#BDC3C7'}}>ஹைட்ராலிக் பம்ப்</Text>
              <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: '1%'}}>₹ 1000</Text>
              <Grid>
                <Col>
                  <Text style={{ fontSize: 13, color: '#BDC3C7'}}>2̶0̶0̶0̶</Text>
                </Col>
                <Col style={{marginRight:'75%'}}>
                  <Text style={{ fontWeight: 'bold', fontSize: 12, marginTop:'3%', color: '#1ABC9C'}}>50% off</Text>
                </Col>
              </Grid>
            </View>
            <Grid style={{marginTop: '6%'}}>
              <Col style={{marginLeft: '5%',width: '15%'}}>
                <Button bordered block success>
                  <Icon name="share" />
                </Button>
              </Col>
                <Col style={{marginLeft: '5%', width: '33%'}}>
                  <Button  block success iconLeft >
                    <Icon name="cart" style={{marginRight: '8%'}}/>
                    <Text style={{color: 'white', marginRight: '8%'}}>Add to Cart</Text>
                  </Button>
                </Col>
              <Col style={{marginLeft: '5%',width: '33%'}}>
                <Button bordered block danger iconLeft>
                  <Icon name="heart-outline" style={{marginRight: '10%'}}/>
                  <Text style={{ marginRight: '8%'}}>WishList</Text>
                </Button>
              </Col>
            </Grid>
            <View style={{marginTop: '2%', marginLeft: '5%'}}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>Description</Text>
              <Card style={{width: '90%'}} >
                <CardItem>
                  <Body>
                    <Text>
                      This is just a transparent card with some text to boot.This is just a transparent card with some text to boot.
                      This is just a transparent card with some text to boot.This is just a transparent card with some text to boot.
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </View>
            <View style={{marginTop: '1%', marginLeft: '5%'}}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>Related Product</Text>
              <FlatList horizontal showsHorizontalScrollIndicator={false} keyExtractor={this.keyExtractor} data={eventslist}
                renderItem={this.renderCarousel} />
            </View>
          </View>
        </Container>
      </MenuContext>
    )}
}

const styles = {
  cardContainerStyle: {
     borderRadius: 8,  marginLeft: 8, height: 120, width: 140,
  },
  col: {
    height: 50,
  },
  button: {
    marginLeft: '75%', backgroundColor: '#3498DB', marginTop: '3%', borderRadius: 3, height: 30, width: '20%',
  }
};
