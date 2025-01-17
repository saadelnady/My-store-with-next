import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { POST_USER_LOGIN, POST_USER_LOGOUT } from "./actionTypes";
import {
  postUserLoginSuccess,
  postUserLoginFailure,
  postUserLogOutSuccess,
} from "./actions";
import { postUserLoginApi } from "@/api/user";
import { showToast } from "@/helpers/helpers";
import nookies from "nookies";

function* postUserLoginSaga({ payload }) {
  const { intl, router } = payload;
  try {
    const { message, token, user } = yield call(postUserLoginApi, payload);

    if (message === "success") {
      yield put(postUserLoginSuccess({ message, token, user }));
      nookies.set(null, "token", token, { path: "/" });
      showToast("success", "loggedInSuccess", intl);
      router.replace("/");
    }
  } catch (error) {
    yield put(postUserLoginFailure(error));
    showToast("error", "loginFail", intl);
  }
}

// --------------------------------------------------------------
function* postUserLogOutSaga({ payload }) {
  const { intl } = payload;

  try {
    nookies.destroy(null, "token", { path: "/" });

    yield put(postUserLogOutSuccess());

    showToast("success", "logoutSuccess", intl);
  } catch (error) {
    yield put(postUserLogOutFailure(error));

    showToast("error", "logoutFail", intl);
  }
}
// --------------------------------------------------------------

export function* watchPostUserLogin() {
  yield takeEvery(POST_USER_LOGIN, postUserLoginSaga);
}
// --------------------------------------------------------------

export function* watchPostUserLogout() {
  yield takeEvery(POST_USER_LOGOUT, postUserLogOutSaga);
}

// --------------------------------------------------------------

function* userSaga() {
  yield all([fork(watchPostUserLogin)]);
  yield all([fork(watchPostUserLogout)]);
}

export default userSaga;
