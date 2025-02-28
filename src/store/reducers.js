import { combineReducers } from "redux";
import categories from "./categories/reducer.js";
import products from "./products/reducer.js";
import user from "./user/reducer.js";
import brands from "./brands/reducer.js";
import cart from "./cart/reducer.js";
import wishlist from "./wishlist/reducer.js";
import orders from "./orders/reducer.js";
import checkout from "./checkout/reducer.js";

const rootReducer = combineReducers({
  categories,
  products,
  user,
  brands,
  cart,
  wishlist,
  orders,
  checkout,
});

export default rootReducer;
