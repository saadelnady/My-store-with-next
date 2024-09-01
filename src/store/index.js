import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension"; // Import the DevTools extension
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const composedEnhancers =
  process.env.NODE_ENV !== "production"
    ? composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
    : applyMiddleware(sagaMiddleware, logger);

export const store = createStore(rootReducer, composedEnhancers);
store.sagaTask = sagaMiddleware.run(rootSaga);
