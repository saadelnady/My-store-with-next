import { all } from "redux-saga/effects";
import { watchFetchCategories } from "../categories/categoriesSaga";
import { watchFetchProducts } from "../products/productsSaga";

function* rootSaga() {
  yield all([watchFetchCategories(), watchFetchProducts()]);
}

export default rootSaga;
