import React, { Component } from 'react';
import { View, Text, Image, Picker} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Label, Icon, Item, Input, Button, Card, CardItem } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Logo from '../../../assets/logo.jpg';
import Languages from '../../language';

export default class Signup extends Component {

  state = {
   icon: "eye-off",
   passwords: true,
   language: 'English',
 };

 _changeIcon() {
   this.setState(prevState => ({
     icon: prevState.icon == 'eye' ? 'eye-off' : 'eye',
     passwords: !prevState.passwords,
   }))
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
            <Title style={{ fontSize: 18 }}>SIGN UP</Title>
          </Body>
          <Right />
        </Header>
        <View>
          <Card transparent>
            <CardItem>
              <Left />
              <Right>
                <Picker selectedValue={this.state.language} style={{height: 50, width: "80%"}}
                  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                  <Picker.Item label="English" value="English" />
                  <Picker.Item label="Hindi" value="Hindi" />
                  <Picker.Item label="Kannada" value="Kannada" />
                  <Picker.Item label="Tamil" value="Tamil" />
                  <Picker.Item label="Telugu" value="Telugu" />
                </Picker>
              </Right>
            </CardItem>
          </Card>
        </View>
        <View style={{ alignItems: 'center', marginTop: 'auto', marginBottom: 'auto'}}>
          <Image source={Logo} style={{height: '25%', width: '60%', marginLeft: 'auto', marginRight: 'auto' }} />
          <Item regular style={{backgroundColor: 'white', borderRadius: 3, width: '90%', marginTop: '2%'}}>
            <Input placeholder={Languages.names[this.state.language]}  placeholderTextColor="#95A5A6"  />
          </Item>
          <Item regular style={{backgroundColor: 'white', borderRadius: 3, width: '90%', marginTop: '3%'}}>
            <Input placeholder={Languages.phoneno[this.state.language]} placeholderTextColor="#95A5A6"  />
          </Item>
          <Item regular style={{backgroundColor: 'white', borderRadius: 3, width: '90%',marginTop: '3%'}}>
            <Input placeholder={Languages.email[this.state.language]} placeholderTextColor="#95A5A6"  />
          </Item>
          <Item regular style={{backgroundColor: 'white', borderRadius: 3, width: '90%', marginTop: '3%'}}>
            <Input placeholder={Languages.passwords[this.state.language]} placeholderTextColor="#95A5A6"  />
          </Item>
          <Item regular style={{backgroundColor: 'white', borderRadius: 3, width: '90%', marginTop: '3%'}}>
            <Input placeholder={Languages.confirmPassword[this.state.language]} placeholderTextColor="#95A5A6"  secureTextEntry={this.state.passwords} />
            <Icon name={this.state.icon}  style={{ color:'#95A5A6'}} onPress= {() => this._changeIcon()}/>
          </Item>
          <View style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '5%', marginBottom: '5%'}}>
            <Button block bordered style={{ borderRadius: 3, borderColor: '#1E8449', width: '35%',  backgroundColor: 'white'}}>
              <Text style={{fontWeight:'bold', color: '#1E8449', marginLeft: 'auto', marginRight: 'auto'}}>
                {Languages.signup[this.state.language]}
              </Text>
            </Button>
          </View>
        </View>
      </Container>
    )
  }
}
