import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    SIGN_USER,
    SIGN_USER_SUCCESS,
    SIGN_USER_FAIL,
    LOGIN_USER_SUCCESSt,
    LOGIN_USER_FAILt,
    LOGIN_USERt,
    SIGN_USERt,
    SIGN_USER_SUCCESSt,
    SIGN_USER_FAILt
  } from "../actions/types";
  
  const INITIAL_STATE = {
    email: "",
    password: "",
    user: null,
    error: "",
    serror: "",
    loading: false
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case EMAIL_CHANGED:
        // Wrong way of doing it
        // sate.email = action.payload;
        // return state;
        return { ...state, email: action.payload };
      case PASSWORD_CHANGED:
        return { ...state, password: action.payload };
      case LOGIN_USER:
        return { ...state, loading: true, error: "" };  
      case LOGIN_USER_SUCCESS:
        return { ...state, ...INITIAL_STATE, user: action.payload };
      case LOGIN_USER_FAIL:
        return { ...state, error: "Authenication Failed", loading: false };
      case SIGN_USER:
        return { ...state, loading: true, error: "" };
      case SIGN_USER_SUCCESS:
        return { ...state, ...INITIAL_STATE, user: action.payload };
      case SIGN_USER_FAIL:
        return { ...state, serror: "Registration Failed", loading: false };  
        case LOGIN_USERt:
          return { ...state, loading: true, error: "" };  
        case LOGIN_USER_SUCCESSt:
          return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAILt:
          return { ...state, error: "Authenication Failed", loading: false };
        case SIGN_USERt:
          return { ...state, loading: true, error: "" };
        case SIGN_USER_SUCCESSt:
          return { ...state, ...INITIAL_STATE, user: action.payload };
        case SIGN_USER_FAILt:
          return { ...state, serror: "Registration Failed", loading: false };  
    
      default:
        return state;
    }
  };
  