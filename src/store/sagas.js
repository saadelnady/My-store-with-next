import { all } from "redux-saga/effects";
import categoriesSaga from "./categories/saga";
import productsSaga from "./products/saga";
import userSaga from "./user/saga";
import brandsSaga from "./brands/saga";
import cartSaga from "./cart/saga";

export default function* rootSaga() {
  yield all([
    categoriesSaga(),
    productsSaga(),
    userSaga(),
    brandsSaga(),
    cartSaga(),
  ]);
}
