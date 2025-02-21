import toast from "react-hot-toast";
import { END } from "redux-saga";

export const endSaga = async (store) => {
  store.dispatch(END);
  await store.sagaTask.toPromise();
  return;
};

export const showToast = (type, message, intl) => {
  if (type === "success") {
    return toast.success(intl.formatMessage({ id: message }));
  }
  return toast.error(intl.formatMessage({ id: message }));
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
