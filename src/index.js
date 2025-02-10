// src/index.js
import React from "react";
import ReactDOM from "react-dom/client"; // Ovo je bitno
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import counterReducer from "./reducers";

// Kreiranje Redux Store-a
const store = createStore(counterReducer);

// Kreiranje root-a s React 18 API-jem
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
