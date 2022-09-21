import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Styles/app.scss";
import App from "./App";
import NotFound from "./Components/NotFound/NotFound";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
                {/* Path to no where */}
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);
