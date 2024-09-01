import { combineReducers } from "redux";
import categoriesReducer from "../categories/categoriesReducer";
import productsReducer from "../products/productsReducer";

const rootReducer = combineReducers({
  categoriesReducer,
  productsReducer,
});

export default rootReducer;
