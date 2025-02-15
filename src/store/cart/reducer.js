import { HYDRATE } from "next-redux-wrapper";
import {
  EDIT_CART,
  EDIT_CART_SUCCESS,
  EDIT_CART_FAILURE,
  GET_CART,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
  POST_ADD_PRODUCT_TO_CART,
  POST_ADD_PRODUCT_TO_CART_SUCCESS,
  POST_ADD_PRODUCT_TO_CART_FAILURE,
  DELETE_CART_ITEM,
  DELETE_CART_ITEM_SUCCESS,
  DELETE_CART_ITEM_FAILURE,
  DELETE_CART_ITEMS,
  DELETE_CART_ITEMS_SUCCESS,
  DELETE_CART_ITEMS_FAILURE,
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

    case GET_CART: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_CART_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        cart: action.payload,
      };
    }
    case GET_CART_FAILURE: {
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

    case EDIT_CART: {
      return {
        ...state,
        // isLoading: true,
      };
    }
    case EDIT_CART_SUCCESS: {
      return {
        ...state,
        // isLoading: false,
        cart: action.payload,
      };
    }
    case EDIT_CART_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    // ----------------------------------------------------------------------

    case DELETE_CART_ITEM: {
      return {
        ...state,
        // isLoading: true,
      };
    }
    case DELETE_CART_ITEM_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        cart: action.payload,
      };
    }
    case DELETE_CART_ITEM_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    // ----------------------------------------------------------------------

    case DELETE_CART_ITEMS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case DELETE_CART_ITEMS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        cart: action.payload,
      };
    }
    case DELETE_CART_ITEMS_FAILURE: {
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
