import { all } from "redux-saga/effects";
import categoriesSaga from "./categories/saga";
import productsSaga from "./products/saga";
import userSaga from "./user/saga";
import brandsSaga from "./brands/saga";
import cartSaga from "./cart/saga";
import wishlistSaga from "./wishlist/saga";
import ordersSaga from "./orders/saga";
import checkoutSaga from "./checkout/saga";

export default function* rootSaga() {
  yield all([
    categoriesSaga(),
    productsSaga(),
    userSaga(),
    brandsSaga(),
    cartSaga(),
    wishlistSaga(),
    ordersSaga(),
    checkoutSaga(),
  ]);
}
