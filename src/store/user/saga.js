import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { POST_USER_LOGIN } from "./actionTypes";
import { postUserLoginSuccess, postUserLoginFailure } from "./actions";
import { postUserLoginApi } from "@/api/user";

function* postUserLoginSaga({ payload }) {
  try {
    const { message, token, user } = yield call(postUserLoginApi, payload);

    if (message === "success") {
      console.log("message", message);
      console.log("token", token);
      console.log("user", user);

      yield put(postUserLoginSuccess({ message, token, user }));
      localStorage.setItem("token", token);
      navigate("/");
    }
  } catch (error) {
    yield put(postUserLoginFailure(error));
  }
}
// ====================================================

export function* watchPostUserLogin() {
  yield takeEvery(POST_USER_LOGIN, postUserLoginSaga);
}

// ====================================================

function* userSaga() {
  yield all([fork(watchPostUserLogin)]);
}

export default userSaga;
