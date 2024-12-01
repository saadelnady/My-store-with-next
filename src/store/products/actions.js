import {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT,
  GET_SINGLE_PRODUCT_FAILURE,
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
// ----------------------------------------------------------------------------
export const getSingleProduct = (payload) => {
  return {
    type: GET_SINGLE_PRODUCT,
    payload,
  };
};

export const getSingleProductSuccess = (payload) => {
  return {
    type: GET_SINGLE_PRODUCT_SUCCESS,
    payload,
  };
};

export const getSingleProductFailure = (payload) => {
  return {
    type: GET_SINGLE_PRODUCT_FAILURE,
    payload,
  };
};
