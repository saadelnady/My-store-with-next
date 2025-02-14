import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import {
  DELETE_CART_ITEM,
  DELETE_CART_ITEMS,
  EDIT_CART,
  GET_CART,
  POST_ADD_PRODUCT_TO_CART,
} from "./actionTypes";
import {
  getCartSuccess,
  getCartFailure,
  postAddProductToCartSuccess,
  postAddProductToCartFailure,
  editCartSuccess,
  editCartFailure,
  deleteCartItemSuccess,
  deleteCartItemFailure,
  deleteCartItemsSuccess,
  deleteCartItemsFailure,
} from "./actions";
import {
  deleteCartItemApi,
  deleteCartItemsApi,
  editCartApi,
  getCartApi,
  postAddToCartApi,
} from "@/api/cart";
import { showToast } from "@/helpers/helpers";

function* getCartSaga({ payload }) {
  try {
    const { data } = yield call(getCartApi, payload);
    yield put(getCartSuccess(data));
  } catch (error) {
    yield put(getCartFailure(error));
  }
}
// -----------------------------------------------------------------
function* addProductToCartSaga({ payload }) {
  try {
    const { data } = yield call(postAddToCartApi, payload);

    yield put(postAddProductToCartSuccess(data));
    showToast("success", "existing-product-in-cart", payload.intl);
  } catch (error) {
    yield put(postAddProductToCartFailure(error));
  }
}
// -----------------------------------------------------------------
function* editCartSaga({ payload }) {
  try {
    const { data } = yield call(editCartApi, payload);
    yield put(editCartSuccess(data));
  } catch (error) {
    yield put(editCartFailure(error));
  }
}
// -----------------------------------------------------------------
function* deleteCartItemSaga({ payload }) {
  try {
    const { data, status } = yield call(deleteCartItemApi, payload);
    if (status === "success") {
      showToast("success", "delete-cart-item-success", payload.intl);
      yield put(deleteCartItemSuccess(data));
    }
  } catch (error) {
    yield put(deleteCartItemFailure(error));
  }
}
// -----------------------------------------------------------------
function* deleteCartItemsSaga({ payload }) {
  try {
    const { message } = yield call(deleteCartItemsApi, payload);
    if (message === "success") {
      showToast("success", "delete-cart-success", payload.intl);
      yield put(deleteCartItemsSuccess([]));
    }
  } catch (error) {
    yield put(deleteCartItemsFailure(error));
  }
}
// -----------------------------------------------------------------
export function* watchGetCart() {
  yield takeEvery(GET_CART, getCartSaga);
}
// -----------------------------------------------------------------

export function* watchPostAddProductToCart() {
  yield takeEvery(POST_ADD_PRODUCT_TO_CART, addProductToCartSaga);
}
// -----------------------------------------------------------------
export function* watchEditCart() {
  yield takeEvery(EDIT_CART, editCartSaga);
}
// -----------------------------------------------------------------
export function* watchDeleteCartItem() {
  yield takeEvery(DELETE_CART_ITEM, deleteCartItemSaga);
}
// -----------------------------------------------------------------
export function* watchDeleteCartItems() {
  yield takeEvery(DELETE_CART_ITEMS, deleteCartItemsSaga);
}

// -----------------------------------------------------------------

function* cartSaga() {
  yield all([fork(watchGetCart)]);
  yield all([fork(watchPostAddProductToCart)]);
  yield all([fork(watchEditCart)]);
  yield all([fork(watchDeleteCartItem)]);
  yield all([fork(watchDeleteCartItems)]);
}

export default cartSaga;
