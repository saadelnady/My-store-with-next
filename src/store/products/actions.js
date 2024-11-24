import {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
} from "./actionTypes";

export const getAllProducts = (payload) => {
  return {
    type: GET_ALL_PRODUCTS,
    payload,
  };
};

export const getAllProductsSuccess = (payload) => {
  return {
    type: GET_ALL_PRODUCTS_SUCCESS,
    payload,
  };
};

export const getAllProductsFailure = (payload) => {
  return {
    type: GET_ALL_PRODUCTS_FAILURE,
    payload,
  };
};
