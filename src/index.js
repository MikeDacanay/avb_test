import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import "index.css";
import store from "store";


const rootEl = document.getElementById("root");

// allow for hot module replacement
const render = () => {
  const App = require("app").default;

  const wrappedApp = (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );



  ReactDOM.hydrate(wrappedApp, rootEl);
};

render();
if (module.hot) {
  module.hot.accept("app", render);
}