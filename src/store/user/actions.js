import {
  POST_USER_LOGIN,
  POST_USER_LOGIN_SUCCESS,
  POST_USER_LOGIN_FAILURE,
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
