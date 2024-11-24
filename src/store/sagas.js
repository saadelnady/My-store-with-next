import { all } from "redux-saga/effects";
import categoriesSaga from "./categories/saga";
import productsSaga from "./products/saga";

export default function* rootSaga() {
  yield all([categoriesSaga(), productsSaga()]);
}
