import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { POST_CHECKOUT } from "./actionTypes";
import { postCheckoutSuccess, postCheckoutFailure } from "./actions";
import { postCheckoutApi } from "@/api/checkout";

function* postCheckoutSaga({ payload }) {
  const { router } = payload;
  try {
    const { status, session } = yield call(postCheckoutApi, payload);
    if (status === "success") {
      yield put(postCheckoutSuccess(session));
      router.replace(session?.url);
    }
  } catch (error) {
    yield put(postCheckoutFailure(error));
  }
}

export function* watchPostCheckout() {
  yield takeEvery(POST_CHECKOUT, postCheckoutSaga);
}

// --------------------------------------------------------

function* checkoutSaga() {
  yield all([fork(watchPostCheckout)]);
}

export default checkoutSaga;
