import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import {
  POST_USER_LOGIN,
  POST_USER_LOGOUT,
  POST_USER_SIGNUP,
} from "./actionTypes";
import {
  postUserLoginSuccess,
  postUserLoginFailure,
  postUserLogOutSuccess,
  postUserSignupSuccess,
  postUserSignupFailure,
} from "./actions";
import { postUserLoginApi, postUserSignupApi } from "@/api/user";
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
function* postUserSignupSaga({ payload }) {
  const { intl, router } = payload;
  try {
    const { message, token, user } = yield call(postUserSignupApi, payload);

    if (message === "success") {
      yield put(postUserSignupSuccess({ message, token, user }));
      nookies.set(null, "token", token, { path: "/" });
      nookies.set(null, "userName", user.name, { path: "/" });
      nookies.set(null, "email", user.email, { path: "/" });
      showToast("success", "signupSuccess", intl);
      router.replace("/");
    }
  } catch (error) {
    yield put(postUserSignupFailure(error));
    showToast("error", "signupFail", intl);
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

export function* watchPostUserSignup() {
  yield takeEvery(POST_USER_SIGNUP, postUserSignupSaga);
}

// --------------------------------------------------------------

function* userSaga() {
  yield all([fork(watchPostUserLogin)]);
  yield all([fork(watchPostUserLogout)]);
  yield all([fork(watchPostUserSignup)]);
}

export default userSaga;
