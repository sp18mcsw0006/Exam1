import React, { Component } from 'react';
import { Container, Content, Button, Text,Card,CardItem,Body } from 'native-base';
import Header from './Header';
import { Actions } from "react-native-router-flux";

export default class ButtonBlockExample extends Component {
  render() {
    return (
      <Container>
          {/* <Header name = " Main Profile"/> */}
        <Content>

        <Card>
            <CardItem >
              <Text style={{fontSize:25,fontWeight:'700'}}>Saad Ali Afandi</Text>
            </CardItem>
            <CardItem >
              <Body>
                <Text style={{fontSize:20,fontWeight:'700'}}>
                  03222857875
                </Text>
                <Text style={{fontSize:20,fontWeight:'700'}}>
                  12-jan-94
                </Text>
                <Text style={{fontSize:20,fontWeight:'700'}}>
                  block 3 Gulshan -e- Iqbal Karachi
                </Text>
                <Text style={{fontSize:20,fontWeight:'700'}}>
                 saadaliafandi@gmail.com
                </Text>
              </Body>
            </CardItem>
            <CardItem >
              <Text style={{marginBottom:20}}>Click Below For Further Info</Text>

            </CardItem>
          </Card>


          <Button 
                style={{marginTop:20,marginLeft:140,marginBottom:10}} 
                rounded light
                onPress= {() => {Actions.obj();}}
            >
            <Text>Objectives</Text>
          </Button>
        
          <Button 
            style={{marginTop:20,marginLeft:140,marginBottom:10}} 
            rounded success
            onPress= {() => {Actions.exp();}}
            >
            <Text>Experiences</Text>
          </Button>

          <Button 
            style={{marginTop:20,marginLeft:140,marginBottom:10}} 
            rounded info
            onPress= {() => {Actions.edu();}}
            >
            <Text>Education</Text>
          </Button>
         
        </Content>
      </Container>
    );
  }
}