import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store'
import Root from './components/root'
import {signup} from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  window.getState = store.getState; // for TESTING
  window.dispatch = store.dispatch; // TESTING
  window.signup = signup; // TESTING
  ReactDOM.render(<Root store={store}/>, root);
});