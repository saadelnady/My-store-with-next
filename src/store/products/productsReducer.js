import {
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
} from "./actionsTypes";

const initialState = {
  products: [],
  product: {},
  isLoading: false,
  error: null,
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action?.payLoad?.data,
      };
    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
      };
    default:
      return state;
  }
}
