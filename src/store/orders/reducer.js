import { HYDRATE } from "next-redux-wrapper";
import {
  GET_ORDERS,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
} from "./actionTypes";

const initialState = {
  orders: [],
  isLoading: false,
  error: null,
};

const orders = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      for (const key in action.payload?.orders) {
        if (Object.hasOwnProperty.call(action.payload?.orders, key)) {
          const element = action.payload?.orders[key];
          element === "init" && delete action.payload?.orders[key];
        }
      }
      return { ...state, ...action.payload.orders };
    // ----------------------------------------------------------------------

    case GET_ORDERS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_ORDERS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        orders: action.payload,
      };
    }
    case GET_ORDERS_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};
export default orders;
