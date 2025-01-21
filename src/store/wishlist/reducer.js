import { HYDRATE } from "next-redux-wrapper";
import {
  GET_WISHLIST,
  GET_WISHLIST_SUCCESS,
  GET_WISHLIST_FAILURE,
  POST_ADD_PRODUCT_TO_WISHLIST,
  POST_ADD_PRODUCT_TO_WISHLIST_SUCCESS,
  POST_ADD_PRODUCT_TO_WISHLIST_FAILURE,
  DELETE_PRODUCT_FROM_WISHLIST,
  DELETE_PRODUCT_FROM_WISHLIST_SUCCESS,
  DELETE_PRODUCT_FROM_WISHLIST_FAILURE,
} from "./actionTypes";

const initialState = {
  wishlist: [],
  isLoading: false,
  error: null,
};

const wishlist = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      for (const key in action.payload?.wishlist) {
        if (Object.hasOwnProperty.call(action.payload?.wishlist, key)) {
          const element = action.payload?.wishlist[key];
          element === "init" && delete action.payload?.wishlist[key];
        }
      }
      return { ...state, ...action.payload.wishlist };
    // ----------------------------------------------------------------------

    case GET_WISHLIST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_WISHLIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        wishlist: action.payload,
      };
    }
    case GET_WISHLIST_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    // ----------------------------------------------------------------------

    case POST_ADD_PRODUCT_TO_WISHLIST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case POST_ADD_PRODUCT_TO_WISHLIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        wishlist: action.payload,
      };
    }
    case POST_ADD_PRODUCT_TO_WISHLIST_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }

    // ----------------------------------------------------------------------

    case DELETE_PRODUCT_FROM_WISHLIST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case DELETE_PRODUCT_FROM_WISHLIST_SUCCESS: {
      console.log("action.payload >>>", action.payload);

      return {
        ...state,
        isLoading: false,
        wishlist: state.wishlist.filter((product) =>
          action.payload.includes(product.id)
        ),
      };
    }
    case DELETE_PRODUCT_FROM_WISHLIST_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }

    // ----------------------------------------------------------------------

    default:
      return state;
  }
};
export default wishlist;
