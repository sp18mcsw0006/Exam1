import React, { Component } from 'react';
import { Platform,StatusBar,StyleSheet,TextInput,View,ScrollView,Image,TouchableOpacity,SafeAreaView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import IoniIcon from 'react-native-vector-icons/Ionicons';
import { Actions } from "react-native-router-flux";

import Category from './custom/Category';
//import Card from './Card';

class Explore extends Component {

    render(){
        return(
            //SafeAreaView to show borders in iphone
            <SafeAreaView  style={{  flex: 1 }}>
                {/* Main Container */}
                <View style={{  flex: 1 }}>
                {/* body */}
                    <ScrollView
                        // to send response as fast as Possible
                        scrollEventThrottle={16}
                    >
                    {/* tags area */}
                        <View style={{flex:1,backgroundColor: 'white',paddingTop:20}}>
                            <Text style={{fontSize:24,fontWeight:'700',paddingHorizontal:20}}>
                                Popular Tags 
                            </Text>
                                 
                            <View style={{height:130,marginTop:20}}>
                                 {/* to scroll components horizontally */}
                                 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                     
                                    <TouchableOpacity  onPress= {() => {Actions.Plist({play: 'PLS1QulWo1RIbfTjQvTdj8Y6yyq4R7g-Al'});}}>
                                        <Category imageUri={require('../img/java.jpg')} name="Java" />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress= {() => {Actions.Plist({play: 'PLePgxAvwOSJUr8gymUVUTzGvXdmuYuC1L'});}}>
                                        <Category imageUri={require('../img/csharp.jpg')} name="C#" />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress= {() => {Actions.Plist({play: 'PLS1QulWo1RIZ4erAYe3k8zWA5jAu72mVa'});}}>
                                        <Category imageUri={require('../img/jscript.jpg')} name="JavaScript" />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress= {() => {Actions.Plist({play: 'PLS1QulWo1RIY4auvfxAHS9m_fZJ2wxSse'});}}>
                                         <Category imageUri={require('../img/mysql.jpg')} name="MySql" />
                                    </TouchableOpacity>

                                 </ScrollView>
                            </View>     
                        </View>
                     {/* / tags area */} 

                      {/* course area */}
                      <View style={{flex:1,backgroundColor: 'white',paddingTop:15,paddingBottom:20}}>
                            <Text style={{fontSize:24,fontWeight:'700',paddingHorizontal:20}}>
                                Choose Course
                            </Text>
                                 
                            <View style={{ height:300,marginTop:15,marginBottom:10}}>
                                 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                 
                             <TouchableOpacity onPress= {() => {Actions.Plist({play: 'PLS1QulWo1RIbfTjQvTdj8Y6yyq4R7g-Al'});}}>
                                 <Container style={styles.course}>
                                      <Content>
                                            <Card style={{flex: 1}}>
                                                <CardItem>
                                                <Left>
                                                    <Thumbnail source = {require('../img/javalogo.jpg')} />
                                                    <Body>
                                                    <Text style={styles.head}>Java</Text>
                                                    <Text note style={styles.title}>Tuitorials for Beginners</Text>
                                                    </Body>
                                                </Left>
                                                </CardItem>

                                                <CardItem>
                                                <Body>
                                                    <Text>
                                                    Java Fundamentals for Absolute Beginners
                                                    </Text>
                                                </Body>
                                                </CardItem>

                                                <CardItem>
                                                <Left>
                                                    <Button transparent textStyle={{color: '#87838B'}}>
                                                    <Icon name="logo-github" />
                                                    <Text>1,500 stars</Text>
                                                    </Button>
                                                </Left>
                                                </CardItem>
                                            </Card>
                                        </Content>
                                      
                                    </Container>
                                    </TouchableOpacity>

                                    {/* <Card logoUri={require('../img/javalogo.jpg')}
                                    head="Java" subhead="Tuitorials for Beginners"
                                    details="Java Fundamentals for Absolute Beginners" /> */}
                                <TouchableOpacity onPress= {() => {Actions.Plist({play: 'PLS1QulWo1RIZ4erAYe3k8zWA5jAu72mVa'});}}>
                                 <Container style={styles.course}>                                   
                                    <Content>
                                            <Card style={{flex: 1}}>
                                                <CardItem>
                                                <Left>
                                                    <Thumbnail source = {require('../img/js.png')} />
                                                    <Body>
                                                    <Text style={styles.head}>JS</Text>
                                                    <Text note style={styles.title}>Learn JS in 1 Hour</Text>
                                                    </Body>
                                                </Left>
                                                </CardItem>

                                                <CardItem>
                                                <Body>
                                                    <Text>
                                                    JavaScript Basics Beginners by Faizan Ali
                                                    </Text>
                                                </Body>
                                                </CardItem>

                                                <CardItem>
                                                <Left>
                                                    <Button transparent textStyle={{color: '#87838B'}}>
                                                    <Icon name="logo-github" />
                                                    <Text>3,926 stars</Text>
                                                    </Button>
                                                </Left>
                                                </CardItem>
                                            </Card>
                                        </Content>

                                    </Container>
                                    </TouchableOpacity>
                                   
                                   {/* <Card logoUri={require('../img/js.png')}
                                    head="JS" subhead="Learn JS in 1 Hour"
                                    details="JavaScript Basics Beginners" />

                                    
                                    <Card logoUri={require('../img/rn.png')}
                                    head="React Native" subhead="Intermediate to Advanced"
                                    details="React-Native Basics " /> */}
                              <TouchableOpacity onPress= {() => {Actions.Plist({play: 'PLYxzS__5yYQlGltx7Vx-VgFpfWS5HEMHO'});}}>
                                <Container style={styles.course}>
                                    <Content>
                                            <Card style={{flex: 1}}>
                                                <CardItem>
                                                <Left>
                                                    <Thumbnail source = {require('../img/rn.png')} />
                                                    <Body>
                                                    <Text style={styles.head}>React Native</Text>
                                                    <Text note style={styles.title}>Intermediate to Advanced</Text>
                                                    </Body>
                                                </Left>
                                                </CardItem>

                                                <CardItem>
                                                <Body>
                                                    <Text>
                                                    React-Native Basics with examples version : 16.8.3
                                                    </Text>
                                                </Body>
                                                </CardItem>

                                                <CardItem>
                                                <Left>
                                                    <Button transparent textStyle={{color: '#87838B'}}>
                                                    <Icon name="logo-github" />
                                                    <Text>406 stars</Text>
                                                    </Button>
                                                </Left>
                                                </CardItem>
                                            </Card>
                                        </Content>
                                    </Container>
                                    </TouchableOpacity>


                                 </ScrollView>
                            </View>     
                        </View>
                     {/* / course area */} 
                    </ScrollView>                
                    {/* / body */}
                </View>
                 {/* / Main Container */}
             </SafeAreaView>
        );
    }
}

export default Explore;

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }, 
    img: {
        flex:1,
        //justifyContent: 'center',
       // alignItems: 'center',
        width: null,
        height: null,
        resizeMode: 'stretch',
        borderWidth:0
    },
    course:{
        borderRadius: 9,
        borderWidth: 3,
        borderColor: '#e74c3c',
        height:300,
        width:200,
        marginLeft:20,
        overflow: 'hidden'
    },
    txt: {
        textAlign: 'center',
        color: '#2c3e50',
        fontWeight: '700',
        fontSize:15
    },
    title:{
        width:100,
        textAlign: 'left',
    },
    head:{
        width:100
    }

  });