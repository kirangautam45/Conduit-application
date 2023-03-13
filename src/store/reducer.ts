import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter/slice";

export default combineReducers({
  counter: counterReducer,
});
