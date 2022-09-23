//import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App, document.getElementById('root'));

const { initializeApp } = require('firebase-admin/app');
const app = initializeApp();