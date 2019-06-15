import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./components/Login";
import SignUp from "./components/SignUp";

import Home from "./components/Explore";
import Profile from "./components/Profile";
import Objectives from "./components/Objectives";
import Experience from "./components/Experience";
import Education from "./components/Education";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        
      
        {/* user authentication */}
        {/* <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            //title="Please Login"
            hideNavBar={true}
            initial
          />
          <Scene
            key="sign"
            component={SignUp}
            //title="Please Login"
            hideNavBar={true}
            
          />
        </Scene> */}
            
        {/* View */}
        <Scene key="main">
          <Scene
            key="explore"
            // leftTitle="Back"
            // onLeft={() => {
            //   Actions.employeeCreate();
            // }}
            component={Profile}
            
            title="Main Profile"
          />
           <Scene
            key="obj"
            title="Objectives"
         
            component={Objectives}
          />
           <Scene
            key="exp"
          //  hideNavBar={true}
            component={Experience}
            title="Experiences"
          /> 
           <Scene
            key="edu"
          //  hideNavBar={true}
            component={Education}
            title="Education"
          /> 
        </Scene>
       
        
      </Scene>
    </Router>
  );
};

export default RouterComponent;
