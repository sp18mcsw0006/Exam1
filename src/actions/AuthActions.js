import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  SIGN_USER_SUCCESS,
  SIGN_USER_FAIL,
  SIGN_USER,
  LOGIN_USER_SUCCESSt,
  LOGIN_USER_FAILt,
  LOGIN_USERt,
  SIGN_USER_SUCCESSt,
  SIGN_USER_FAILt,
  SIGN_USERt,
  } from "./types";

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

export const loginUsert = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USERt });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccesst(dispatch, user))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccesst(dispatch, user))
          .catch(() => loginUserFailt(dispatch));
      });
  };
};


export const signUpUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: SIGN_USER });
    firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(
            (data) => {
              const { user } = data
              if(user) {
                user.updateProfile({
                    displayName: 'user'
                }).then(user => signUserSuccess(dispatch,user))
              }
            })
          .catch(() => signUserFail(dispatch));
  };
};

export const signUpUsert = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: SIGN_USERt });
    firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(
            (data) => {
              const { user } = data
              if(user) {
                user.updateProfile({
                    displayName: 'user'
                }).then(user => signUserSuccesst(dispatch,user))
              }
            })
          .catch(() => signUserFailt(dispatch));
  };
};


const signUserSuccess = (dispatch, user) => {
  dispatch({
    type: SIGN_USER_SUCCESS,
    payload: user
  });
  // Actions.employeeList();
  Actions.main();
};

const signUserSuccesst = (dispatch, user) => {
  dispatch({
    type: SIGN_USER_SUCCESSt,
    payload: user
  });
  // Actions.employeeList();
  Actions.tmain();
};


const signUserFail = (dispatch, user) => {
  dispatch({
    type: SIGN_USER_FAIL
  });
};

const signUserFailt = (dispatch, user) => {
  dispatch({
    type: SIGN_USER_FAILt
  });
};





const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  // Actions.employeeList();
  Actions.main();
};

const loginUserFail = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_FAIL
  });
};

const loginUserSuccesst = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESSt,
    payload: user
  });
  // Actions.employeeList();
  Actions.tmain();
};

const loginUserFailt = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_FAILt
  });
};

