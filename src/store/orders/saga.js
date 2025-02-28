import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { GET_ORDERS } from "./actionTypes";
import { getOrdersSuccess, getOrdersFailure } from "./actions";
import { getOrdersApi } from "@/api/orders";

function* getOrdersSaga({ payload }) {
  

  try {
    const orders = yield call(getOrdersApi, payload);
    yield put(getOrdersSuccess(orders));
  } catch (error) {
    yield put(getOrdersFailure(error));
  }
}

// -----------------------------------------------------------------
export function* watchGetOrders() {
  yield takeEvery(GET_ORDERS, getOrdersSaga);
}

// -----------------------------------------------------------------

function* ordersSaga() {
  yield all([fork(watchGetOrders)]);
}

export default ordersSaga;
