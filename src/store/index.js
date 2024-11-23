import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import { createWrapper } from "next-redux-wrapper";

// To see if we are in production mode or development mode
const IS_PRODUCTION = process.env.NODE_ENV === "production";
// ---------------------------------------------------
// Explanation
// ---------------------------------------------------
// We have Two Functions Here :

// 1- bindMiddleware
//      . It will be used in setup (redux-devtools-extension)  in development mode
//      . It will used in setup middleware return middleware
//      . It will return applyMiddleware(...middleware);
//      . in development mode will wrapp applyMiddleware(...middleware) with composeWithDevTools
// ---------------------------------------------------
function bindMiddleware(middleware) {
  if (!IS_PRODUCTION) {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
}
// ---------------------------------------------------
// Explanation
// ---------------------------------------------------

// 2- makeStore
//      .We can use it to get instance of saga middleware
//      .To store data we need to setup store
//      .so store is a calling createStore function take 2 arguments
//        1- root reducer that combine all reducers in app
//        2- middleware that will be used in app
//        ===> bindMiddleware that we created before take one argument
//        that is an array of middlewares [sagaMiddleware]
//        3- To use saga middleware in store we need to call sagaMiddleware.run(rootSaga);
//        Rootsaga combine all sagas in app
//        4- return store in the end
const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};
// export makeStore function
export default makeStore;
// ---------------------------------------------------
// ---------------------------------------------------

//  To use store that we created with next js we need to use createWrapper from next-redux-wrapper
//  it take 2 arguments
//      1- makeStore a function that we created before
//      2- { debug: !IS_PRODUCTION } this will be used in development mode
//      export it using wrapper constant

export const wrapper = createWrapper(makeStore, {
  // debug: !IS_PRODUCTION,
});
