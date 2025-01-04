import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { GET_ALL_PRODUCTS, GET_SINGLE_PRODUCT } from "./actionTypes";
import {
  getAllProductsSuccess,
  getAllProductsFailure,
  getSingleProductSuccess,
  getSingleProductFailure,
} from "./actions";
import { getAllProductsApi, getSingleProductApi } from "@/api/products";

function* getAllProductsSaga({ payload }) {
  try {
    const data = yield call(getAllProductsApi, payload);

    yield put(getAllProductsSuccess(data));
  } catch (error) {
    yield put(getAllProductsFailure(error));
  }
}
// ====================================================
function* getSingleProductSaga({ payload }) {
  try {
    const { data } = yield call(getSingleProductApi, payload);
    yield put(getSingleProductSuccess(data));
  } catch (error) {
    yield put(getSingleProductFailure(error));
  }
}
// ====================================================

export function* watchGetAllProducts() {
  yield takeEvery(GET_ALL_PRODUCTS, getAllProductsSaga);
}
// ====================================================

export function* watchGetSingleProduct() {
  yield takeEvery(GET_SINGLE_PRODUCT, getSingleProductSaga);
}

// ====================================================

function* productsSaga() {
  yield all([fork(watchGetAllProducts)]);
  yield all([fork(watchGetSingleProduct)]);
}

export default productsSaga;
