import { all } from "redux-saga/effects";
import categoriesSaga from "./categories/saga";

export default function* rootSaga() {
  yield all([categoriesSaga()]);
}
