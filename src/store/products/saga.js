import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { GET_ALL_PRODUCTS } from "./actionTypes";
import { getAllProductsSuccess, getAllProductsFailure } from "./actions";
import { getAllProductsApi } from "@/api/products";

function* getAllProductsSaga({ payload }) {
  try {
    const { data } = yield call(getAllProductsApi, payload);
    yield put(getAllProductsSuccess(data));
  } catch (error) {
    yield put(getAllProductsFailure(error));
  }
}
// ====================================================

export function* watchGetAllProducts() {
  yield takeEvery(GET_ALL_PRODUCTS, getAllProductsSaga);
}

// ====================================================

function* productsSaga() {
  yield all([fork(watchGetAllProducts)]);
}

export default productsSaga;
