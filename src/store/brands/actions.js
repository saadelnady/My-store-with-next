import {
  GET_ALL_BRANDS,
  GET_ALL_BRANDS_FAILURE,
  GET_ALL_BRANDS_SUCCESS,
} from "./actionTypes";

export const getAllBrands = (payload) => {
  return {
    type: GET_ALL_BRANDS,
    payload,
  };
};
export const getAllBrandsSuccess = (payload) => {
  return {
    type: GET_ALL_BRANDS_SUCCESS,
    payload,
  };
};
export const getAllBrandsFailure = (payload) => {
  return {
    type: GET_ALL_BRANDS_FAILURE,
    payload,
  };
};
