import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { GET_USER_CART, POST_ADD_PRODUCT_TO_CART } from "./actionTypes";
import {
  getUserCartSuccess,
  getUserCartFailure,
  postAddProductToCartSuccess,
  postAddProductToCartFailure,
} from "./actions";
import { getUserCartApi, postAddToCartApi } from "@/api/cart";

function* getUserCartSaga({ payload }) {
  try {
    const { data } = yield call(getUserCartApi, payload);
    yield put(getUserCartSuccess(data));
  } catch (error) {
    yield put(getUserCartFailure(error));
  }
}
// -----------------------------------------------------------------
function* addProductToCartSaga({ payload }) {
  console.log("payload >>>>>", payload);

  try {
    const { data } = yield call(postAddToCartApi, payload);

    yield put(postAddProductToCartSuccess(data));
  } catch (error) {
    yield put(postAddProductToCartFailure(error));
  }
}
// -----------------------------------------------------------------
export function* watchGetUserCart() {
  yield takeEvery(GET_USER_CART, getUserCartSaga);
}
// -----------------------------------------------------------------

export function* watchPostAddProductToCart() {
  yield takeEvery(POST_ADD_PRODUCT_TO_CART, addProductToCartSaga);
}

// -----------------------------------------------------------------

function* cartSaga() {
  yield all([fork(watchGetUserCart), fork(watchPostAddProductToCart)]);
}

export default cartSaga;
