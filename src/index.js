import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import WebOS from "./WebOS";
import reportWebVitals from "./reportWebVitals";

const computerDiv = ReactDOM.createRoot(document.getElementById("WebOS"));
computerDiv.render(
    <React.StrictMode>
        <WebOS />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
