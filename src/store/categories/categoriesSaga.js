import { getData } from "@/api/API";
import { GET_CATEGORIES } from "@/store/categories/actionsTypes";

import {
  getCategoriesSuccess,
  getCategoriesFail,
} from "@/store/categories/categoriesActions";
import { put, call, takeLatest } from "redux-saga/effects";

async function fetchCategoriesApi() {
  const response = await getData(`/categories`);
   return response;
}

function* fetchCategories() {
  try {
    const categories = yield call(fetchCategoriesApi);
     yield put(getCategoriesSuccess(categories));
  } catch (error) {
     yield put(getCategoriesFail(error));
  }
}
// ========================================================================

export function* watchFetchCategories() {
  yield takeLatest(GET_CATEGORIES, fetchCategories);
}
