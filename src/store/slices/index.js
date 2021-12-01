import { combineReducers } from "@reduxjs/toolkit";

import viewReducer, { name as viewName } from "store/slices/view";
import commentsReducer, { name as commentsName } from "store/slices/comments";
import { commentsApi } from "store/services/comments";

const rootReducer = combineReducers({
  [commentsName]: commentsReducer,
  [viewName]: viewReducer,
  [commentsApi.reducerPath]: commentsApi.reducer,
});

export default rootReducer;
