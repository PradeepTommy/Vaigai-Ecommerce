import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView, AsyncStorage, TouchableWithoutFeedback} from 'react-native';
import { Container, Header, Title, Body, Left, Right, Button, Card, CardItem, Icon,
   Content, List, ListItem, Thumbnail } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';

 const eventslist = [
     {
       src:
         'https://image.freepik.com/free-photo/fried-eggs-drinks-breakfast_23-2147758279.jpg',
       title: 'Hydralic Pump',
       cost : '1500'
     },
     {
       src:
         'https://image.freepik.com/free-photo/indian-masala-egg-omelet_136595-191.jpg',
       title: 'Hygralic generator',
       cost: '100'
     },
   ];

   const events = [
       {
         src:
           'https://image.freepik.com/free-photo/fried-eggs-drinks-breakfast_23-2147758279.jpg',
         title: 'Pvc Pump ',
         cost : '100'
       },
       {
         src:
           'https://image.freepik.com/free-photo/indian-masala-egg-omelet_136595-191.jpg',
         title: 'generator',
         cost: '100'
       },
     ];

export default class Wishlist extends Component {

  constructor () {
  super()
  this.state = {
    selectedIndex: 2
  }
}

  keyExtractor = (item, index) => index.toString();
  renderCarousel = ({item}) => (
    <Card style={styles.cardContainerStyle}>
      <Grid>
        <Col style={{width: '40%'}}>
          <Image source={{uri: item.src}} style={{width: '60%', height: "70%", marginLeft: '5%',
             justifyContent: 'center', marginTop: 'auto', marginBottom: 'auto'}} />
        </Col>
        <Col style={{width: '50%',}}>
          <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: '10%'}}>{item.title}</Text>
          <Text style={{fontSize: 15, color: '#CACFD2' }}>₹{item.cost}</Text>
          <Text style={{fontSize: 14, color: '#CACFD2' }}>(This is just a transparent card )</Text>
        </Col>
      </Grid>
    </Card>
  );

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
            <Title style={{ fontSize: 18, marginLeft: '3%' }}>WishList</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={{marginTop: '3%'}}>
            <FlatList  showsHorizontalScrollIndicator={false} keyExtractor={this.keyExtractor} data={eventslist}
              renderItem={this.renderCarousel} />
            <FlatList  showsHorizontalScrollIndicator={false} keyExtractor={this.keyExtractor} data={events}
                  renderItem={this.renderCarousel} />
          </View>
        </Content>
      </Container>
    )
  }
}


const styles = {
  cardContainerStyle: {
     borderRadius: 8,  marginLeft: "auto", marginRight: 'auto', height: 130, width: "90%", marginTop:'3%',
  },
  col: {
    height: 50,
  },
  button: {
    marginLeft: '75%', backgroundColor: '#3498DB', marginTop: '3%', borderRadius: 3, height: 30, width: '20%',
  }
};
