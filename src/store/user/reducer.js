import { HYDRATE } from "next-redux-wrapper";
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
  POST_USER_FORGET_PASSWORD_SUCCESS,
  POST_USER_FORGET_PASSWORD_FAILURE,
  POST_USER_OTP,
  POST_USER_OTP_SUCCESS,
  POST_USER_OTP_FAILURE,
  EDIT_USER_PASSWORD,
  EDIT_USER_PASSWORD_SUCCESS,
  EDIT_USER_PASSWORD_FAILURE,
} from "./actionTypes";

const initialState = {
  users: [],
  user: {},
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      for (const key in action.payload?.users) {
        if (Object.hasOwnProperty.call(action.payload?.users, key)) {
          const element = action.payload?.users[key];
          element === "init" && delete action.payload?.users[key];
        }
      }
      return { ...state, ...action.payload.users };
    case POST_USER_LOGIN: {
      return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
      };
    }
    case POST_USER_LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: action?.payload?.user,
      };
    }
    case POST_USER_LOGIN_FAILURE: {
      return {
        ...state,
        isLoggedIn: false,
        error: action.payload,
      };
    }
    // --------------------------------------------------

    case POST_USER_LOGOUT:
      return {
        ...state,
        isLoading: true,
      };
    case POST_USER_LOGOUT_SUCCESS:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
        isLoading: false,
        error: null,
      };
    case POST_USER_LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    // --------------------------------------------------
    case POST_USER_SIGNUP: {
      return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
      };
    }

    case POST_USER_SIGNUP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: action.payload.user,
      };
    }

    case POST_USER_SIGNUP_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.payload,
      };
    }
    // --------------------------------------------------
    case POST_USER_FORGET_PASSWORD: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case POST_USER_FORGET_PASSWORD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case POST_USER_FORGET_PASSWORD_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    // --------------------------------------------------
    case POST_USER_OTP: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case POST_USER_OTP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case POST_USER_OTP_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    // --------------------------------------------------------
    case EDIT_USER_PASSWORD: {
      return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
      };
    }
    case EDIT_USER_PASSWORD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
      };
    }
    case EDIT_USER_PASSWORD_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
export default user;
