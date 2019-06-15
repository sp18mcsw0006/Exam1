import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Separator } from 'native-base';
export default class ListSeparatorExample extends Component {
  render() {
    return (
      <Container>
      
        <Content>
          <Separator bordered>
            <Text style={{fontSize:25,fontWeight:'700'}}>Magical Digits</Text>
          </Separator>
          <ListItem>
            <Text>VB Development</Text>
          </ListItem>
          <ListItem last>
            <Text>ASP.Net , ADO.Net , SQL Server 2012</Text>
          </ListItem>

          <Separator bordered>
            <Text style={{fontSize:25,fontWeight:'700'}}>Discon Solutions</Text>
          </Separator>
          <ListItem>
            <Text>CCTV installation</Text>
          </ListItem>
         
          
        </Content>
      </Container>
    );
  }
}