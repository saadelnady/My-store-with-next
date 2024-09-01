import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
} from "./actionsTypes";

export const getProducts = (payLoad) => {
  return { type: GET_PRODUCTS, payLoad };
};
export const getProductsSuccess = (payLoad) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payLoad,
  };
};
export const getProductsFail = (payLoad) => {
  return {
    type: GET_PRODUCTS_FAIL,
    payLoad,
  };
};
