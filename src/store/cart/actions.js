import {
  GET_CART,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
  POST_ADD_PRODUCT_TO_CART,
  POST_ADD_PRODUCT_TO_CART_SUCCESS,
  POST_ADD_PRODUCT_TO_CART_FAILURE,
  EDIT_CART,
  EDIT_CART_SUCCESS,
  EDIT_CART_FAILURE,
  DELETE_CART_ITEM,
  DELETE_CART_ITEM_SUCCESS,
  DELETE_CART_ITEM_FAILURE,
  DELETE_CART_ITEMS,
  DELETE_CART_ITEMS_SUCCESS,
  DELETE_CART_ITEMS_FAILURE,
} from "./actionTypes";

export const getCart = (payload) => {
  return {
    type: GET_CART,
    payload,
  };
};

export const getCartSuccess = (payload) => {
  return {
    type: GET_CART_SUCCESS,
    payload,
  };
};

export const getCartFailure = (payload) => {
  return {
    type: GET_CART_FAILURE,
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
export const editCart = (payload) => {
  return {
    type: EDIT_CART,
    payload,
  };
};

export const editCartSuccess = (payload) => {
  return {
    type: EDIT_CART_SUCCESS,
    payload,
  };
};
export const editCartFailure = (payload) => {
  return {
    type: EDIT_CART_FAILURE,
    payload,
  };
};
// ----------------------------------------------------------------------
export const deleteCartItem = (payload) => {
  return {
    type: DELETE_CART_ITEM,
    payload,
  };
};

export const deleteCartItemSuccess = (payload) => {
  return {
    type: DELETE_CART_ITEM_SUCCESS,
    payload,
  };
};
export const deleteCartItemFailure = (payload) => {
  return {
    type: DELETE_CART_ITEM_FAILURE,
    payload,
  };
};

// ----------------------------------------------------------------------
export const deleteCartItems = (payload) => {
  return {
    type: DELETE_CART_ITEMS,
    payload,
  };
};

export const deleteCartItemsSuccess = (payload) => {
  return {
    type: DELETE_CART_ITEMS_SUCCESS,
    payload,
  };
};
export const deleteCartItemsFailure = (payload) => {
  return {
    type: DELETE_CART_ITEMS_FAILURE,
    payload,
  };
};

// ----------------------------------------------------------------------
