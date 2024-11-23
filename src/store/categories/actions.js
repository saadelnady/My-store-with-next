import {
  GET_ALL_CATEGORIES,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE,
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
