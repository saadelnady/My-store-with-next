import { createStore, applyMiddleware, compose } from "redux";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension"; // Import the DevTools extension
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const makeStore = (preloadedState = {}) => {
  const composedEnhancers =
    process.env.NODE_ENV !== "production"
      ? composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
      : applyMiddleware(sagaMiddleware, logger);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore);
