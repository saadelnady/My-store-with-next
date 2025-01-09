import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { GET_ALL_BRANDS, GET_SINGLE_BRAND } from "./actionTypes";
import {
  getAllBrandsSuccess,
  getAllBrandsFailure,
  getSingleBrandSuccess,
  getSingleBrandFailure,
} from "./actions";
import { getAllBrandsApi, getSingleBrandApi } from "@/api/brands";

function* getAllBrandsSaga({ payload }) {
  try {
    const { data } = yield call(getAllBrandsApi, payload);
    yield put(getAllBrandsSuccess(data));
  } catch (error) {
    yield put(getAllBrandsFailure(error));
  }
}
// --------------------------------------------------------
function* getSingleBrandSaga({ payload }) {
  try {
    const { data } = yield call(getSingleBrandApi, payload);
    yield put(getSingleBrandSuccess(data));
  } catch (error) {
    yield put(getSingleBrandFailure(error));
  }
}
export function* watchGetAllBrands() {
  yield takeEvery(GET_ALL_BRANDS, getAllBrandsSaga);
}
export function* watchGetSingleBrand() {
  yield takeEvery(GET_SINGLE_BRAND, getSingleBrandSaga);
}

// --------------------------------------------------------

function* brandsSaga() {
  yield all([fork(watchGetAllBrands)]);
  yield all([fork(watchGetSingleBrand)]);
}

export default brandsSaga;
