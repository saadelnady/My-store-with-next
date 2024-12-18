import { HYDRATE } from "next-redux-wrapper";
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
    case CHECK_USER_LOGGED_IN:
      return {
        ...state,
        loading: true,
      };
    case CHECK_USER_LOGGED_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        // user: action.payload,
        isLoggedIn: true,
      };
    case CHECK_USER_LOGGED_IN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isLoggedIn: false,
      };
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
    default:
      return state;
  }
};
export default user;
