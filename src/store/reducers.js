import { combineReducers } from "redux";
import categories from "./categories/reducer.js";

const rootReducer = combineReducers({
  categories,
});

export default rootReducer;
