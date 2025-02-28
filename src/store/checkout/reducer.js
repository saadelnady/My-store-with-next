import { HYDRATE } from "next-redux-wrapper";

const {
  POST_CHECKOUT,
  POST_CHECKOUT_SUCCESS,
  POST_CHECKOUT_FAILURE,
} = require("./actionTypes");

const initialState = {
  checkout: {},
  isLoading: false,
  error: null,
};
const checkout = (state = initialState, action) => {
  switch (action.type) {
    // Hydration is handled by next-redux-wrapper to sync state between server and client side
    case HYDRATE:
      for (const key in action.payload?.checkout) {
        if (Object.hasOwnProperty.call(action.payload?.checkout, key)) {
          const element = action.payload?.checkout[key];
          element === "init" && delete action.payload?.checkout[key];
        }
      }
      return { ...state, ...action.payload.checkout };

    case POST_CHECKOUT:
      return { ...state, isLoading: true };
    case POST_CHECKOUT_SUCCESS:
      return { ...state, isLoading: false, checkout: action.payload };
    case POST_CHECKOUT_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    // ----------------------------------------------------------------------

    default:
      return state;
  }
};

export default checkout;
