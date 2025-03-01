import {
  GET_ALL_CATEGORIES,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE,
  GET_SINGLE_CATEGORY,
  GET_SINGLE_CATEGORY_SUCCESS,
  GET_SINGLE_CATEGORY_FAILURE,
} from "./actionTypes";

export const getAllCategories = (payload) => {
  return {
    type: GET_ALL_CATEGORIES,
    payload,
  };
};

export const getAllCategoriesSuccess = (payload) => {
  return {
    type: GET_ALL_CATEGORIES_SUCCESS,
    payload,
  };
};

export const getAllCategoriesFailure = (payload) => {
  return {
    type: GET_ALL_CATEGORIES_FAILURE,
    payload,
  };
};

// --------------------------------------------------------------
export const getSingleCategory = (payload) => {
  return {
    type: GET_SINGLE_CATEGORY,
    payload,
  };
};

export const getSingleCategorySuccess = (payload) => {
  return {
    type: GET_SINGLE_CATEGORY_SUCCESS,
    payload,
  };
};

export const getSingleCategoryFailure = (payload) => {
  return {
    type: GET_SINGLE_CATEGORY_FAILURE,
    payload,
  };
};
