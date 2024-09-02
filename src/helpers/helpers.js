import { END } from "redux-saga";

export const endSaga = async (store) => {
  store.dispatch(END);
  await store.sagaTask.toPromise();
  return;
};
