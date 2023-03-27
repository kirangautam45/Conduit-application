import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counter/slice';
import articleReducer from './article/slice';
import defaultTagsReducer from './defaultTags/slice';
import articleDetailsReducer from './slug/slice';

export default combineReducers({
  counter: counterReducer,
  article: articleReducer,
  defaultTags: defaultTagsReducer,
  articleSlug: articleDetailsReducer
});
