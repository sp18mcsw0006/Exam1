import React, { Component } from "react";
import { Container,  Content, Card, CardItem, Text, Body } from "native-base";
import Header from './Header';


export default class CardTransparentExample extends Component {
  render() {
    return (
      <Container>
      {/* //  <Header name = "Objectives"/> */}
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text style={{fontSize:20,fontWeight:'700'}}>
                  To work in a progressive and flexible environment where I can polish 
                  and enhance my skills under the supervision of visionary team members
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}