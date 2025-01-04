import { HYDRATE } from "next-redux-wrapper";
import {
  GET_USER_CART,
  GET_USER_CART_FAILURE,
  GET_USER_CART_SUCCESS,
  POST_ADD_PRODUCT_TO_CART,
  POST_ADD_PRODUCT_TO_CART_FAILURE,
  POST_ADD_PRODUCT_TO_CART_SUCCESS,
} from "./actionTypes";

const initialState = {
  cart: [],
  isLoading: false,
  error: null,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      for (const key in action.payload?.cart) {
        if (Object.hasOwnProperty.call(action.payload?.cart, key)) {
          const element = action.payload?.cart[key];
          element === "init" && delete action.payload?.cart[key];
        }
      }
      return { ...state, ...action.payload.cart };
    // ----------------------------------------------------------------------

    case GET_USER_CART: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_USER_CART_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        cart: action.payload,
      };
    }
    case GET_USER_CART_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    // ----------------------------------------------------------------------

    case POST_ADD_PRODUCT_TO_CART: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case POST_ADD_PRODUCT_TO_CART_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        cart: action.payload,
      };
    }
    case POST_ADD_PRODUCT_TO_CART_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    // ----------------------------------------------------------------------

    default:
      return state;
  }
};
export default cart;
