import "bootstrap/dist/css/bootstrap.css";
import "react-phone-number-input/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import getToken from "getToken";
axios.interceptors.request.use((config) => {
  config.headers.Authorization = getToken();

  return config;
});
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
