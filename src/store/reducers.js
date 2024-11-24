import { combineReducers } from "redux";
import categories from "./categories/reducer.js";
import products from "./products/reducer.js";

const rootReducer = combineReducers({
  categories,
  products,
});

export default rootReducer;
