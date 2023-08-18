import { configureStore } from "@reduxjs/toolkit";

import { categoryReducer } from "../reducer";

/* Import the saga middleware object model */

import createSagaMiddleware from "@redux-saga/core";

import rootSaga from "../sagas";

/* create a middleware object */

const sagaMiddleware = createSagaMiddleware();

export const appStore = configureStore({
    reducer:categoryReducer, /* Monitor actions dispatched in an app from UI + Middleware */
    middleware:[sagaMiddleware] /* Help the reducer to manage an execution of all those dispatched action which are having side-effects (i.e. Async calls) */
}); 

/* Run this with the generator function we have added into our application */

sagaMiddleware.run(rootSaga);