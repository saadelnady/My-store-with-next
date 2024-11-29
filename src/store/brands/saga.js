import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { GET_ALL_BRANDS } from "./actionTypes";
import { getAllBrandsSuccess, getAllBrandsFailure } from "./actions";
import { getAllBrandsApi } from "@/api/brands";

function* getAllBrandsSaga({ payload }) {
  try {
    const { data } = yield call(getAllBrandsApi, payload);
    yield put(getAllBrandsSuccess(data));
  } catch (error) {
    yield put(getAllBrandsFailure(error));
  }
}
// ====================================================

export function* watchGetAllBrands() {
  yield takeEvery(GET_ALL_BRANDS, getAllBrandsSaga);
}

// ====================================================

function* brandsSaga() {
  yield all([fork(watchGetAllBrands)]);
}

export default brandsSaga;
