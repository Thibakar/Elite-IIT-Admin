/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "./store";
import ElliteApp from "./App";

import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <ElliteApp />
    </BrowserRouter>
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById("root"),
);
