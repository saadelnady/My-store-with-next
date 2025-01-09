import {
  GET_ALL_BRANDS,
  GET_ALL_BRANDS_FAILURE,
  GET_ALL_BRANDS_SUCCESS,
  GET_SINGLE_BRAND,
  GET_SINGLE_BRAND_SUCCESS,
  GET_SINGLE_BRAND_FAILURE,
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

export const getSingleBrand = (payload) => {
  return {
    type: GET_SINGLE_BRAND,
    payload,
  };
};

export const getSingleBrandSuccess = (payload) => {
  return {
    type: GET_SINGLE_BRAND_SUCCESS,
    payload,
  };
};

export const getSingleBrandFailure = (payload) => {
  return {
    type: GET_SINGLE_BRAND_FAILURE,
    payload,
  };
};
