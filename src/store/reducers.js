import { combineReducers } from "redux";
import categories from "./categories/reducer.js";
import products from "./products/reducer.js";
import user from "./user/reducer.js";
import brands from "./brands/reducer.js";
import cart from "./cart/reducer.js";
import wishlist from "./wishlist/reducer.js";

const rootReducer = combineReducers({
  categories,
  products,
  user,
  brands,
  cart,
  wishlist,
});

export default rootReducer;
