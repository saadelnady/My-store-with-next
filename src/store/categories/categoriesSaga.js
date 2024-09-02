import { getData } from "@/api/API";
import { GET_CATEGORIES } from "@/store/categories/actionsTypes";

import {
  getCategoriesSuccess,
  getCategoriesFail,
} from "@/store/categories/categoriesActions";
import { put, call, takeLatest } from "redux-saga/effects";

async function fetchCategoriesApi() {
  const response = await getData(`/categories`);
  console.log("API Response: ", response);
  return response;
}

function* fetchCategories() {
  try {
    const categories = yield call(fetchCategoriesApi);
    console.log("categories YA SAAD===>", categories);
    yield put(getCategoriesSuccess(categories));
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    yield put(getCategoriesFail(error));
  }
}
// ========================================================================

export function* watchFetchCategories() {
  yield takeLatest(GET_CATEGORIES, fetchCategories);
}
