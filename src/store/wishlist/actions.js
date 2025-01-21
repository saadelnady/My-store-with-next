import {
  DELETE_PRODUCT_FROM_WISHLIST,
  DELETE_PRODUCT_FROM_WISHLIST_FAILURE,
  DELETE_PRODUCT_FROM_WISHLIST_SUCCESS,
  GET_WISHLIST,
  GET_WISHLIST_FAILURE,
  GET_WISHLIST_SUCCESS,
  POST_ADD_PRODUCT_TO_WISHLIST,
  POST_ADD_PRODUCT_TO_WISHLIST_FAILURE,
  POST_ADD_PRODUCT_TO_WISHLIST_SUCCESS,
} from "./actionTypes";

export const getWishlist = (payload) => {
  return {
    type: GET_WISHLIST,
    payload,
  };
};

export const getWishlistSuccess = (payload) => {
  return {
    type: GET_WISHLIST_SUCCESS,
    payload,
  };
};

export const getWishlistFailure = (payload) => {
  return {
    type: GET_WISHLIST_FAILURE,
    payload,
  };
};
// ----------------------------------------------------------------------

export const postAddProductToWishlist = (payload) => {
  return {
    type: POST_ADD_PRODUCT_TO_WISHLIST,
    payload,
  };
};

export const postAddProductToWishlistSuccess = (payload) => {
  return {
    type: POST_ADD_PRODUCT_TO_WISHLIST_SUCCESS,
    payload,
  };
};

export const postAddProductToWishlistFailure = (payload) => {
  return {
    type: POST_ADD_PRODUCT_TO_WISHLIST_FAILURE,
    payload,
  };
};
// ----------------------------------------------------------------------

export const deleteProductFromWishlist = (payload) => {
  return {
    type: DELETE_PRODUCT_FROM_WISHLIST,
    payload,
  };
};

export const deleteProductFromWishlistSuccess = (payload) => {
  return {
    type: DELETE_PRODUCT_FROM_WISHLIST_SUCCESS,
    payload,
  };
};
export const deleteProductFromWishlistFailure = (payload) => {
  return {
    type: DELETE_PRODUCT_FROM_WISHLIST_FAILURE,
    payload,
  };
};
