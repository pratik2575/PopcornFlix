import { compose, applyMiddleware, createStore } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./index";

const composeEnhancer =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

export const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

