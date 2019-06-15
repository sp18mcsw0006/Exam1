import React, { Component } from "react";
// import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk"; //Wiring up the middle ware :)

import reducers from "./reducers";
// import LoginForm from "./components/LoginForm";
import Router from "./Router";

class App extends Component {
  componentWillMount() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDZ5sBLaHeGYOlcAaz0a8K_R-AtcuJ1n0k",
      authDomain: "redux-hr.firebaseapp.com",
      databaseURL: "https://redux-hr.firebaseio.com",
      projectId: "redux-hr",
      storageBucket: "redux-hr.appspot.com",
      messagingSenderId: "141920581107",
      appId: "1:141920581107:web:58646c6fc598feb7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    console.disableYellowBox=true;
  }

  
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
        {/* <LoginForm /> */}
        {/* <View>
          <Text>Bismillah Redux Manager Project</Text>
        </View> */}
      </Provider>
    );
  }
}

export default App;
