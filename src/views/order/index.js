import React, { Component } from 'react';
import { View, Text, StatusBar, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Container, Header, Body, Button, Title, Left, Right, Icon, Content, Card, CardItem} from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Ionicons } from '@expo/vector-icons';

const eventslist = [
  {
    src:
      'https://image.freepik.com/free-photo/fried-eggs-drinks-breakfast_23-2147758279.jpg',
    title: 'Hydralic Pump',
    date: 'Jun 07, 2020',
  },
  {
    src:
      'https://image.freepik.com/free-photo/indian-masala-egg-omelet_136595-191.jpg',
    title: 'Hydralic Generator',
    date: 'Aug 08, 2020',
  },
];

export default class Order extends Component {

  ratingCompleted(rating) {
  console.log("Rating is: " + rating)
}

  renderCarousel = ({item}) => (
    <Card style={styles.cardContainerStyle}>
      <Grid>
        <Col style={{width: '35%'}}>
          <Image source={{uri: item.src}} style={{width: '80%', height: "100%", }}/>
        </Col>
        <Col style={{width: '55%'}}>
          <Text style={{fontWeight: 'bold', marginTop: '2%', marginLeft: "auto", marginRight: 'auto',}}>Deliverd on {item.date}</Text>
          <Text style={{color: '#839192', marginLeft: "auto", marginRight: 'auto'}}>{item.title}</Text>
        </Col>
        <Col>
          <Ionicons name='chevron-forward-sharp' size={20} style={{marginTop: 'auto', marginBottom: 'auto',
             color: '#A6ACAF'}}/>
        </Col>
      </Grid>
      <Grid>
        <Col>
          <Rating  imageSize={25}  startingValue={0} 
             style={{ marginLeft: "auto", marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto'}} />
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
            <Title style={{ fontSize: 18, marginLeft: '1%' }}>My Order</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <FlatList  showsHorizontalScrollIndicator={false} data={eventslist}
            renderItem={this.renderCarousel} />
          <View>
            <Card>
              <CardItem  bordered>
                <Text style={{fontWeight: 'bold', marginLeft: 'auto', marginRight: 'auto',
                   color: '#A6ACAF'}}>No More Order</Text>
              </CardItem>
            </Card>
          </View>
          <Button style={{display: 'none'}} onPress={ () => this.props.navigation.navigate("Views")}>
            <Text>
              jsjsj
            </Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const styles = {
  cardContainerStyle: {  marginTop: '3%',
     height: Dimensions.get('window').height/6, width: "100%",
  },
};
