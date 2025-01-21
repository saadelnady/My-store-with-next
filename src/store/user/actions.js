import {
  POST_USER_LOGIN,
  POST_USER_LOGIN_SUCCESS,
  POST_USER_LOGIN_FAILURE,
  POST_USER_LOGOUT,
  POST_USER_LOGOUT_SUCCESS,
  POST_USER_LOGOUT_FAILURE,
  POST_USER_SIGNUP,
  POST_USER_SIGNUP_SUCCESS,
  POST_USER_SIGNUP_FAILURE,
} from "./actionTypes";

export const postUserLogin = (payload) => {
  return {
    type: POST_USER_LOGIN,
    payload,
  };
};

export const postUserLoginSuccess = (payload) => {
  return {
    type: POST_USER_LOGIN_SUCCESS,
    payload,
  };
};

export const postUserLoginFailure = (payload) => {
  return {
    type: POST_USER_LOGIN_FAILURE,
    payload,
  };
};

export const postUserLogOut = (payload) => {
  return {
    type: POST_USER_LOGOUT,
    payload,
  };
};

export const postUserLogOutSuccess = (payload) => {
  return {
    type: POST_USER_LOGOUT_SUCCESS,
    payload,
  };
};

export const postUserLogOutFailure = (error) => {
  return {
    type: POST_USER_LOGOUT_FAILURE,
    payload: error,
  };
};

export const postUserSignup = (payload) => {
  return {
    type: POST_USER_SIGNUP,
    payload,
  };
};

export const postUserSignupSuccess = (payload) => {
  return {
    type: POST_USER_SIGNUP_SUCCESS,
    payload,
  };
};

export const postUserSignupFailure = (payload) => {
  return {
    type: POST_USER_SIGNUP_FAILURE,
    payload,
  };
};
