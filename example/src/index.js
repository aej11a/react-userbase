import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UserbaseProvider } from "react-userbase";

ReactDOM.render(
    <UserbaseProvider appId={process.env.REACT_APP_USERBASE_APP_ID}>
        <App />
    </UserbaseProvider>,
    document.getElementById("root")
);
