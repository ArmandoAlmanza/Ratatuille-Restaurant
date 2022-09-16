import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Styles/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                {/* Path to no where */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
