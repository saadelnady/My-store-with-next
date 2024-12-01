import { HYDRATE } from "next-redux-wrapper";
import {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_SINGLE_PRODUCT,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_FAILURE,
} from "./actionTypes";

const initialState = {
  products: [],
  product: {},
  isLoading: false,
  error: null,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      for (const key in action.payload?.products) {
        if (Object.hasOwnProperty.call(action.payload?.products, key)) {
          const element = action.payload?.products[key];
          element === "init" && delete action.payload?.products[key];
        }
      }
      return { ...state, ...action.payload.products };
    case GET_ALL_PRODUCTS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_ALL_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    }
    case GET_ALL_PRODUCTS_FAILURE: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }

    // ---------------------------------------------------
    case GET_SINGLE_PRODUCT: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_SINGLE_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        product: action?.payload?.[0],
      };
    }
    case GET_SINGLE_PRODUCT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    // ---------------------------------------------------

    default:
      return state;
  }
};
export default products;
