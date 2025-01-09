import { HYDRATE } from "next-redux-wrapper";

const {
  GET_ALL_BRANDS,
  GET_ALL_BRANDS_SUCCESS,
  GET_ALL_BRANDS_FAILURE,
  GET_SINGLE_BRAND,
  GET_SINGLE_BRAND_SUCCESS,
  GET_SINGLE_BRAND_FAILURE,
} = require("./actionTypes");

const initialState = {
  brands: [],
  brand: {},

  isLoading: false,
  error: null,
};
const brands = (state = initialState, action) => {
  switch (action.type) {
    // Hydration is handled by next-redux-wrapper to sync state between server and client side
    case HYDRATE:
      for (const key in action.payload?.brands) {
        if (Object.hasOwnProperty.call(action.payload?.brands, key)) {
          const element = action.payload?.brands[key];
          element === "init" && delete action.payload?.brands[key];
        }
      }
      return { ...state, ...action.payload.brands };
    case GET_ALL_BRANDS:
      return { ...state, isLoading: true };
    case GET_ALL_BRANDS_SUCCESS:
      return { ...state, isLoading: false, brands: action.payload };
    case GET_ALL_BRANDS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    // ----------------------------------------------------------------------
    case GET_SINGLE_BRAND:
      return { ...state, isLoading: true };
    case GET_SINGLE_BRAND_SUCCESS:
      return { ...state, isLoading: false, brand: action.payload };
    case GET_SINGLE_BRAND_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default brands;
