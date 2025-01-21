import { takeEvery, fork, put, all, call } from "redux-saga/effects";

import {
  DELETE_PRODUCT_FROM_WISHLIST,
  GET_WISHLIST,
  POST_ADD_PRODUCT_TO_WISHLIST,
} from "./actionTypes";

import {
  getWishlistSuccess,
  getWishlistFailure,
  postAddProductToWishlistSuccess,
  postAddProductToWishlistFailure,
  deleteWishlistItemSuccess,
  deleteWishlistItemFailure,
  deleteProductFromWishlistSuccess,
  deleteProductFromWishlistFailure,
} from "./actions";

import {
  deleteProductFromWishlistApi,
  getWishlistApi,
  postAddProductToWishlistApi,
} from "@/api/wishlist";

import { showToast } from "@/helpers/helpers";

function* getWishlistSaga({ payload }) {
  try {
    const { data } = yield call(getWishlistApi, payload);
    yield put(getWishlistSuccess(data));
  } catch (error) {
    yield put(getWishlistFailure(error));
  }
}
// -----------------------------------------------------------------
function* addProductToWishlistSaga({ payload }) {
  try {
    const { data } = yield call(postAddProductToWishlistApi, payload);
    yield put(postAddProductToWishlistSuccess(data));
  } catch (error) {
    yield put(postAddProductToWishlistFailure(error));
  }
}

// -----------------------------------------------------------------
function* deleteProductFromWishlistSaga({ payload }) {
  try {
    const { data, status } = yield call(deleteProductFromWishlistApi, payload);
    if (status === "success") {
      showToast("success", "delete-wishlist-item-success", payload.intl);
      yield put(deleteProductFromWishlistSuccess(data));
    }
  } catch (error) {
    yield put(deleteProductFromWishlistFailure(error));
  }
}

// -----------------------------------------------------------------
export function* watchGetWishlist() {
  yield takeEvery(GET_WISHLIST, getWishlistSaga);
}
// -----------------------------------------------------------------

export function* watchPostAddProductToWishlist() {
  yield takeEvery(POST_ADD_PRODUCT_TO_WISHLIST, addProductToWishlistSaga);
}

// -----------------------------------------------------------------
export function* watchDeleteProductFromWishlist() {
  yield takeEvery(DELETE_PRODUCT_FROM_WISHLIST, deleteProductFromWishlistSaga);
}
// -----------------------------------------------------------------

function* wishlistSaga() {
  yield all([fork(watchGetWishlist)]);
  yield all([fork(watchPostAddProductToWishlist)]);
  yield all([fork(watchDeleteProductFromWishlist)]);
}

export default wishlistSaga;
