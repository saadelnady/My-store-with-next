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
  POST_USER_FORGET_PASSWORD,
  POST_USER_FORGET_PASSWORD_FAILURE,
  POST_USER_FORGET_PASSWORD_SUCCESS,
  POST_USER_OTP,
  POST_USER_OTP_SUCCESS,
  POST_USER_OTP_FAILURE,
  EDIT_USER_PASSWORD,
  EDIT_USER_PASSWORD_SUCCESS,
  EDIT_USER_PASSWORD_FAILURE,
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
// -----------------------------------------------------------
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
// -----------------------------------------------------------

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
// -----------------------------------------------------------
export const postUserForgetPassword = (payload) => {
  return {
    type: POST_USER_FORGET_PASSWORD,
    payload,
  };
};

export const postUserForgetPasswordSuccess = (payload) => {
  return {
    type: POST_USER_FORGET_PASSWORD_SUCCESS,
    payload,
  };
};

export const postUserForgetPasswordFailure = (payload) => {
  return {
    type: POST_USER_FORGET_PASSWORD_FAILURE,
    payload,
  };
};
// -----------------------------------------------------------
export const postUserOtp = (payload) => {
  return {
    type: POST_USER_OTP,
    payload,
  };
};

export const postUserOtpSuccess = (payload) => {
  return {
    type: POST_USER_OTP_SUCCESS,
    payload,
  };
};

export const postUserOtpFailure = (payload) => {
  return {
    type: POST_USER_OTP_FAILURE,
    payload,
  };
};
// -----------------------------------------------------------
export const editUserPassword = (payload) => {
  return {
    type: EDIT_USER_PASSWORD,
    payload,
  };
};

export const editUserPasswordSuccess = (payload) => {
  return {
    type: EDIT_USER_PASSWORD_SUCCESS,
    payload,
  };
};

export const editUserPasswordFailure = (payload) => {
  return {
    type: EDIT_USER_PASSWORD_FAILURE,
    payload,
  };
};
