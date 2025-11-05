import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppContextWrapper } from "./context/app-context/app-context.jsx";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AppContextWrapper>
            <App />
        </AppContextWrapper>
    </React.StrictMode>
);
