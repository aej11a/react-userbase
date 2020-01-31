import React, { useEffect, useState } from "react";
import "./App.css";
import { Authentication } from "./Authentication";

function App() {
    return (
        <div className="App">
            <h1>Userbase Hook Example</h1>
            <Authentication />
        </div>
    );
}

export default App;
