import {
  GET_USER_CART,
  GET_USER_CART_SUCCESS,
  GET_USER_CART_FAILURE,
  POST_ADD_PRODUCT_TO_CART,
  POST_ADD_PRODUCT_TO_CART_SUCCESS,
  POST_ADD_PRODUCT_TO_CART_FAILURE,
} from "./actionTypes";

export const getUserCart = (payload) => {
  return {
    type: GET_USER_CART,
    payload,
  };
};

export const getUserCartSuccess = (payload) => {
  return {
    type: GET_USER_CART_SUCCESS,
    payload,
  };
};

export const getUserCartFailure = (payload) => {
  return {
    type: GET_USER_CART_FAILURE,
    payload,
  };
};
// ----------------------------------------------------------------------

export const postAddProductToCart = (payload) => {
  return {
    type: POST_ADD_PRODUCT_TO_CART,
    payload,
  };
};

export const postAddProductToCartSuccess = (payload) => {
  return {
    type: POST_ADD_PRODUCT_TO_CART_SUCCESS,
    payload,
  };
};

export const postAddProductToCartFailure = (payload) => {
  return {
    type: POST_ADD_PRODUCT_TO_CART_FAILURE,
    payload,
  };
};
// ----------------------------------------------------------------------
