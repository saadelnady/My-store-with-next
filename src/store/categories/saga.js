import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { GET_ALL_CATEGORIES } from "./actionTypes";
import { getAllCategoriesSuccess, getAllCategoriesFailure } from "./actions";
import { getAllCategoriesApi } from "@/api/categories";

function* getAllCategoriesSaga({ payload }) {
  try {
    const { data } = yield call(getAllCategoriesApi, payload);

    yield put(getAllCategoriesSuccess(data));
  } catch (error) {
    yield put(getAllCategoriesFailure(error));
  }
}
// ====================================================

export function* watchGetAllCategories() {
  yield takeEvery(GET_ALL_CATEGORIES, getAllCategoriesSaga);
}

// ====================================================

function* categoriesSaga() {
  yield all([fork(watchGetAllCategories)]);
}

export default categoriesSaga;
