import {
  POST_CHECKOUT,
  POST_CHECKOUT_SUCCESS,
  POST_CHECKOUT_FAILURE,
} from "./actionTypes";

export const postCheckout = (payload) => {
  return {
    type: POST_CHECKOUT,
    payload,
  };
};
export const postCheckoutSuccess = (payload) => {
  return {
    type: POST_CHECKOUT_SUCCESS,
    payload,
  };
};
export const postCheckoutFailure = (payload) => {
  return {
    type: POST_CHECKOUT_FAILURE,
    payload,
  };
};
