import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Separator } from 'native-base';
export default class Education extends Component {
  render() {
    return (
      <Container>
      
        <Content>
          <Separator bordered>
            <Text style={{fontSize:25,fontWeight:'700'}}>MA (Economics)</Text>
          </Separator>
          <ListItem>
            <Text>University of Sindh 2017</Text>
          </ListItem>
          <Separator bordered>
            <Text style={{fontSize:25,fontWeight:'700'}}>BA (Economics)</Text>
          </Separator>
          <ListItem>
            <Text>University of Sindh 2015</Text>
          </ListItem>
          <Separator bordered>
            <Text style={{fontSize:25,fontWeight:'700'}}>Intermediate)</Text>
          </Separator>
          <ListItem>
            <Text>Board of Intermediate Education Karachi 2012</Text>
          </ListItem>
          <Separator bordered>
            <Text style={{fontSize:25,fontWeight:'700'}}>Matric</Text>
          </Separator>
          <ListItem>
            <Text>Board of Secondary Education Karachi</Text>
          </ListItem>
          
        </Content>
      </Container>
    );
  }
}