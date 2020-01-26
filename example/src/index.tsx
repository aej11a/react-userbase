import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import userbase from "userbase-js";

userbase.init({ appId: process.env.REACT_APP_USERBASE_APP_ID || "" });

ReactDOM.render(<App />, document.getElementById("root"));
