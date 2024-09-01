import { all } from "redux-saga/effects";
import { watchFetchCategories } from "../categories/categoriesSaga";

function* rootSaga() {
  yield all([watchFetchCategories()]);
}

export default rootSaga;
