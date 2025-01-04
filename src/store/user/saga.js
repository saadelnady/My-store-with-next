import {
  takeEvery,
  fork,
  put,
  all,
  call,
  takeLatest,
} from "redux-saga/effects";
import {
  CHECK_USER_LOGGED_IN,
  POST_USER_LOGIN,
  POST_USER_LOGOUT,
} from "./actionTypes";
import {
  postUserLoginSuccess,
  postUserLoginFailure,
  checkUserLoggedInSuccess,
  checkUserLoggedInFailure,
  postUserLogOutSuccess,
} from "./actions";
import { postUserLoginApi } from "@/api/user";
import { showToast } from "@/helpers/helpers";
import nookies, { parseCookies } from "nookies";

function* postUserLoginSaga({ payload }) {
  const { intl } = payload;
  try {
    const { message, token, user } = yield call(postUserLoginApi, payload);

    if (message === "success") {
      yield put(postUserLoginSuccess({ message, token, user }));
      nookies.set(null, "token", token, { path: "/" });
      showToast("success", "loggedInSuccess", intl);
    }
  } catch (error) {
    yield put(postUserLoginFailure(error));
    showToast("error", "loginFail", intl);
  }
}
// --------------------------------------------------------------
function* checkUserLoggedInSaga(action) {
  try {
    const { token } = action.payload;
    if (token) {
      yield put(checkUserLoggedInSuccess({ token }));
    } else {
      yield put(checkUserLoggedInFailure("User is not logged in"));
    }
  } catch (error) {
    yield put(checkUserLoggedInFailure(error));
  }
}
// --------------------------------------------------------------
function* postUserLoggOutSaga({ payload }) {
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
  yield takeLatest(POST_USER_LOGIN, postUserLoginSaga);
}
// --------------------------------------------------------------

export function* watchCheckUserLogin() {
  yield takeEvery(CHECK_USER_LOGGED_IN, checkUserLoggedInSaga);
}
// --------------------------------------------------------------

export function* watchPostUserLogout() {
  yield takeEvery(POST_USER_LOGOUT, postUserLoggOutSaga);
}

// --------------------------------------------------------------

function* userSaga() {
  yield all([
    fork(watchPostUserLogin),
    fork(watchCheckUserLogin),
    fork(watchPostUserLogout),
  ]);
}

export default userSaga;
