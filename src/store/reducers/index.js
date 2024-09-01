import { combineReducers } from "redux";
import categoriesReducer from "../categories/categoriesReducer";

const rootReducer = combineReducers({
  categoriesReducer,
});

export default rootReducer;
