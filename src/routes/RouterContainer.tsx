// import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";

const RouterContainer = () => {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<HomePage />} />
                <Route path="about-us" element={<AboutUs />} />
            </Route>
        </Routes>
    );
};

export default RouterContainer;