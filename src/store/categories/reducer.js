import { HYDRATE } from "next-redux-wrapper";
import {
  GET_ALL_CATEGORIES,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE,
} from "./actionTypes";

const initialState = {
  categories: [],
  category: {},
  isLoading: false,
  error: null,
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      for (const key in action.payload?.categories) {
        if (Object.hasOwnProperty.call(action.payload?.categories, key)) {
          const element = action.payload?.categories[key];
          element === "init" && delete action.payload?.categories[key];
        }
      }
      return { ...state, ...action.payload.categories };
    case GET_ALL_CATEGORIES: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_ALL_CATEGORIES_SUCCESS: {
      return {
        ...state,
        categories: action.payload,
        isLoading: false,
      };
    }
    case GET_ALL_CATEGORIES_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
export default categories;
