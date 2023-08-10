import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.css";
import App from "./App/App";
import { store } from "./models";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>
);
