import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { GET_ALL_CATEGORIES, GET_SINGLE_CATEGORY } from "./actionTypes";
import {
  getAllCategoriesSuccess,
  getAllCategoriesFailure,
  getSingleCategorySuccess,
  getSingleCategoryFailure,
} from "./actions";
import { getAllCategoriesApi, getSingleCategoryApi } from "@/api/categories";

function* getAllCategoriesSaga({ payload }) {
  try {
    const { data } = yield call(getAllCategoriesApi, payload);

    yield put(getAllCategoriesSuccess(data));
  } catch (error) {
    yield put(getAllCategoriesFailure(error));
  }
}
// ====================================================
function* getSingleCategorySaga({ payload }) {
  try {
    const { data } = yield call(getSingleCategoryApi, payload);

    yield put(getSingleCategorySuccess(data));
  } catch (error) {
    yield put(getSingleCategoryFailure(error));
  }
}
// ====================================================

export function* watchGetAllCategories() {
  yield takeEvery(GET_ALL_CATEGORIES, getAllCategoriesSaga);
}
export function* watchGetSingleCategory() {
  yield takeEvery(GET_SINGLE_CATEGORY, getSingleCategorySaga);
}

// ====================================================

function* categoriesSaga() {
  yield all([fork(watchGetAllCategories)]);
  yield all([fork(watchGetSingleCategory)]);
}

export default categoriesSaga;
