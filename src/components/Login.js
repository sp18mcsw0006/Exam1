import React, { Component } from "react";
import { View,Text,Image,StyleSheet,KeyboardAvoidingView,TouchableOpacity,StatusBar,TextInput} from "react-native";

import { emailChanged, passwordChanged, loginUser,signUpUser } from "../actions";
import { Card, CardSection, Input, CustomButton, Spinner } from "./common";
import { connect } from "react-redux";

import { Actions } from "react-native-router-flux";

class Login extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
      }
      onPasswordChange(text) {
        this.props.passwordChanged(text);
      }
      onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
      }
      renderError() {
        if (this.props.error) {
          return (
            <View style={{ backgroundColor: "white" }}>
              <Text style={styles.errorTextStyle}>{this.props.error}</Text>
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
          styles={{backgroundColor:'#FFF' ,borderColor:'#1abc9c'}}  
          onPress={this.onButtonPress.bind(this)}>Login</CustomButton>
        );
      }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <TouchableOpacity 
                        style={styles.buttonContainer} 
                        onPress= {() => {Actions.sign();}}
                >
                    <Text style={styles.buttonText}>SIGNUP</Text>
                </TouchableOpacity>
                <View style={styles.logoContainer}>
                    <Image 
                    source={require('../img/books.png')}
                    style={styles.logo}
                    />
                    <Text style={styles.title}>E-Learning Platform ... !</Text>
                    {this.renderError()}
                </View>
                {/* <View>
                    {this.renderError()}
                </View> */}
                <View style={styles.formContainer}>
                    <View style={styles.containerForm}>
                        <StatusBar barStyle="light-content" />
                        <TextInput 
                            style={styles.inputForm}
                            placeholder="Your Email"
                            placeholderTextColor="#FFFFFF"
                            returnKeyType="next"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                        />

                        <TextInput 
                            secureTextEntry
                            placeholder="Password"
                            placeholderTextColor="#FFFFFF"
                            returnKeyType="go"
                            style={styles.inputForm}
                            ref={(input) => this.passwordInput = input}
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}
                        />
                       
                        <CardSection>{this.renderButton()}</CardSection>
                
                    </View>
                </View>

            </KeyboardAvoidingView>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1
    },
    logo: {
        width: 100,
        height: 100
    },
    errorTextStyle:{
        fontSize: 20,
        alignSelf: "center",
        color: "red"
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        textAlign: 'center',
        opacity: 0.9,
        fontWeight: '300',
        fontSize: 20,
        marginBottom: 10  
    },
    buttonContainer: {
        //backgroundColor: '#2980b9',
        paddingVertical:  15,
        alignItems: 'flex-end',
        padding: 20

    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    },
    containerForm: {
        padding: 20
    },
    inputForm: {

        //backgroundColor: 'rgba(255,255,255,0.2)',
       // marginBottom: 10,
        //paddingHorizontal: 10,

        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#ecf0f1',
        borderBottomWidth: 1,
        fontSize: 18
    },
    buttonContainerForm: {
        backgroundColor: '#2980b9',
        paddingVertical:  15

    },
    buttonTextForm: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
});

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

export default connect(
    mapStateToProps,
    {emailChanged,passwordChanged,loginUser}
)(Login);