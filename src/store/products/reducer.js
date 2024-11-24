import { HYDRATE } from "next-redux-wrapper";
import {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
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
        products: action.payload,
      };
    }
    case GET_ALL_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case GET_ALL_PRODUCTS_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
export default products;
