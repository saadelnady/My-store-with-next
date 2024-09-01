import {
  GET_CATEGORIES,
  GET_CATEGORIES_FAIL,
  GET_CATEGORIES_SUCCESS,
} from "./actionsTypes";

export const getCategories = (payLoad) => {
  return {
    type: GET_CATEGORIES,
    payLoad,
  };
};
export const getCategoriesSuccess = (payLoad) => {
  return {
    type: GET_CATEGORIES_SUCCESS,
    payLoad,
  };
};
export const getCategoriesFail = (payLoad) => {
  return {
    type: GET_CATEGORIES_FAIL,
    payLoad,
  };
};
