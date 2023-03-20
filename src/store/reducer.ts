import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counter/slice';
import articleReducer from './article/slice';
import defaultReducer from './defaultTags/slice';

export default combineReducers({
  counter: counterReducer,
  article: articleReducer,
  defaultTags: defaultReducer,
});
