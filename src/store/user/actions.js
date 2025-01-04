import {
  POST_USER_LOGIN,
  POST_USER_LOGIN_SUCCESS,
  POST_USER_LOGIN_FAILURE,
  CHECK_USER_LOGGED_IN,
  CHECK_USER_LOGGED_IN_SUCCESS,
  CHECK_USER_LOGGED_IN_FAILURE,
  POST_USER_LOGOUT,
  POST_USER_LOGOUT_SUCCESS,
  POST_USER_LOGOUT_FAILURE,
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

export const checkUserLoggedIn = (cookies) => {
  return {
    type: CHECK_USER_LOGGED_IN,
    payload: cookies,
  };
};

export const checkUserLoggedInSuccess = (cookies) => {
  return {
    type: CHECK_USER_LOGGED_IN_SUCCESS,
    payload: cookies,
  };
};

export const checkUserLoggedInFailure = (error) => {
  return {
    type: CHECK_USER_LOGGED_IN_FAILURE,
    payload: error,
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
