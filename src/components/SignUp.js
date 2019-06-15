import React, { Component } from "react";
import { View,Text,Image,StyleSheet,KeyboardAvoidingView,TextInput,TouchableOpacity} from "react-native";


import { emailChanged, passwordChanged, loginUser,signUpUser } from "../actions";
import { Card, CardSection, Input, CustomButton, Spinner } from "./common";
import { connect } from "react-redux";


class Signup extends Component {
    
    onEmailChange(text) {
        this.props.emailChanged(text);
      }
      onPasswordChange(text) {
        this.props.passwordChanged(text);
      }
      onButtonPress() {
        const { email, password } = this.props;
        this.props.signUpUser({ email, password });
      }
      srenderError() {
        if (this.props.serror) {
          return (
            <View style={{ backgroundColor: "white" }}>
              <Text style={styles.errorTextStyle}>{this.props.serror}</Text>
            </View>
          );
        }
      }
      renderButton() {
        if (this.props.loading) {
          return <Spinner size="large" />;
        }
        return (
          <CustomButton 
            styles={{backgroundColor:'#1abc9c' ,borderColor:'#1abc9c'}}
            onPress={this.onButtonPress.bind(this)}>REGISTER</CustomButton>
        );
      }

    render() {
        return (
            
           
               
                    <View style={styles.containerForm}>
                    {this.srenderError()}
                        <Text style={styles.headerForm}>Registration Form</Text>

                        <TextInput 
                            placeholder="Your Name"
                            placeholderTextColor="#FFFFFF"
                            returnKeyType="next"
                            onSubmitEditing={() => this.emailInput.focus()}
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.inputForm}
                        />

                        <TextInput 
                            style={styles.inputForm}
                            placeholder="Your Email (abc@gmail.com)"
                            placeholderTextColor="#FFFFFF"
                            returnKeyType="next"
                            ref={(input) => this.emailInput = input}
                            onSubmitEditing={() => this.passwordInput.focus()}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                            // underlineColorAndroid={'transparent'}
                        />  

                        <TextInput 
                            secureTextEntry
                            placeholder="Password (min 6 characters)"
                            placeholderTextColor="#FFFFFF"
                            returnKeyType="go"
                            style={styles.inputForm}
                            ref={(input) => this.passwordInput = input}
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}
                            // underlineColorAndroid={'transparent'}
                        />

                        {/* <TouchableOpacity style={styles.buttonForm} onPress = {() => this.props.navigation.navigate('Home')}>
                            <Text style={styles.buttontextForm}>REGISTER</Text>
                        </TouchableOpacity> */}
                         <CardSection>{this.renderButton()}</CardSection>
                    </View>
               

           
              
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#3498db'
    },
    formContainer: {
        flex:5,
        
    },
    errorTextStyle:{
        fontSize: 20,
        alignSelf: "center",
        color: "red"
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 80,
        flexGrow: 1
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        textAlign: 'center',
        opacity: 0.9,
        fontWeight: '300',
        fontSize: 20  
    },
    containerForm: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#3498db',
        paddingLeft: 60,
        paddingRight: 60,
        alignSelf: 'stretch'   
    },
    headerForm: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#ecf0f1',
        borderBottomWidth: 1
    },
    inputForm: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#ecf0f1',
        borderBottomWidth: 1,
        fontSize: 18
    },
    buttonForm: {
        //alignSelf: 'stretch',
        //alignItems: 'center',
        //padding: 20,
        //marginTop: 10,        
        backgroundColor: '#1abc9c',
        //paddingVertical:  15

        
        paddingVertical:  15
    },
    buttontextForm: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontWeight: '700'
    }
});

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        serror: state.auth.serror,
        loading: state.auth.loading
    };
};

export default connect(
    mapStateToProps,
    {emailChanged,passwordChanged,signUpUser}
)(Signup);