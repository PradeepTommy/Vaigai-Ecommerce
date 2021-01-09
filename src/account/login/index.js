import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Picker,AsyncStorage } from "react-native";
import { Container, Header, Left, Body, Right, Title, Label, Item, Input, Button, Content, Card, CardItem  } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Icon from '../../../assets/logo.jpg';
import Languages from '../../language';


export default class Login extends Component {

  state = {
    password: true,
    language: 'English',
 };

  goToSignup = () => {
    this.props.navigation.navigate('Signup');
  }

  storeData = async () => {
  try {
    await AsyncStorage.setItem("login", JSON.stringify(this.state.language),
    () => this.props.navigation.navigate("Home", {id: this.state.language}));
  } catch (error) {
    // Error saving data
  }
};

  render() {
    return(
      <Container>
        <Header style={{backgroundColor: '#1E8449'}}>
          <Body>
            <Title style={{ fontSize: 18, marginLeft: '3%' }}>AGRIIST</Title>
          </Body>
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
        <View style={{marginTop: 'auto', marginBottom: 'auto'}}>
          <Image source={Icon} style={{height: '30%', width: '60%', marginLeft: 'auto', marginRight: 'auto' }} />
            <Item regular style={{backgroundColor: 'white', borderRadius: 3, width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop:'3%'}}>
              <Input placeholder={Languages.phoneorEmail[this.state.language]}  placeholderTextColor="#95A5A6"  />
            </Item>
            <Item regular style={{backgroundColor: 'white', borderRadius: 3, width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop:'5%'}}>
              <Input placeholder={Languages.password[this.state.language]} placeholderTextColor="#95A5A6" secureTextEntry={this.state.password} />
            </Item>
            <View style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '5%', marginBottom: '5%'}}>
              <Button block bordered style={{ borderRadius: 3, borderColor: '#1E8449', width: '30%',  backgroundColor: 'white'}}
                 onPress={this.storeData } >
                <Text style={{fontWeight:'bold', color: '#1E8449', marginLeft: 'auto', marginRight: 'auto'}}>
                  {Languages.login[this.state.language]}
                </Text>
              </Button>
            </View>
            <View style={{marginLeft: 'auto', marginRight: 'auto',}}>
              <Text style={{fontSize: 15}}>
                Don't have an account?
                  <Text onPress={this.goToSignup} style={{fontSize: 15,  fontWeight: 'bold', color: '#85C1E9'}}> {Languages.signup[this.state.language]}</Text>
              </Text>
            </View>
            <View style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '2%'}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("ForgotPassword")}>
                <Text style={{fontSize: 15}}>{Languages.forgotPassword[this.state.language]}</Text>
              </TouchableOpacity>
            </View>
        </View>
      </Container>
    )
  }
}
