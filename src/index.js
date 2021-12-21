import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Creating action cable for the app to use
const CableApp = {};
CableApp.cable = actionCable.createConsumer(APP_CABLE_URL);
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App cableApp={CableApp} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export const APP_URL = "http:localhost:3000";
export const APP_CABLE_URL = "ws://localhost:3000/cable";
