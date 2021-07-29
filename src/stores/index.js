import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import gifReducer from "./gif";

const reducer = combineReducers({
  gif: gifReducer
});

const store = configureStore({ reducer });

export default store;
