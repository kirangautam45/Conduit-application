import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter/slice";
import articleReducer from "./article/slice";

export default combineReducers({
  counter: counterReducer,
  article: articleReducer,
});
