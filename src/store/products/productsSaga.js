import { getData } from "@/api/API";

import { put, call, takeLatest } from "redux-saga/effects";
import { getProductsFail, getProductsSuccess } from "./productsActions";
import { GET_PRODUCTS } from "./actionsTypes";

function fetchpProductsApi() {
  return getData(`/products`);
}

function* fetchProducts() {
  try {
    const products = yield call(fetchpProductsApi);
    yield put(getProductsSuccess(products));
  } catch (error) {
    yield put(getProductsFail(error));
  }
}
// ========================================================================

export function* watchFetchProducts() {
  yield takeLatest(GET_PRODUCTS, fetchProducts);
}
