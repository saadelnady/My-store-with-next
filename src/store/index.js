import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const makeStore = () => {
  const middleware = [sagaMiddleware, logger];

  const store = createStore(
    rootReducer,
    process.env.NODE_ENV !== "production"
      ? composeWithDevTools(applyMiddleware(...middleware))
      : applyMiddleware(...middleware)
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore);
