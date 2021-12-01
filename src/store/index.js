import { configureStore } from "@reduxjs/toolkit";
import { commentsApi } from "./services/comments";

import reducer from "store/slices";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddiware) =>
  getDefaultMiddiware().concat(commentsApi.middleware),
});

if (module.hot) {
  module.hot.accept("store/slices", () => {
    const reducers = require("store/slices").default;

    store.replaceReducers(reducers);
  });
}

export default store;
