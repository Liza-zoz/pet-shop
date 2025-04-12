// import React from "react";
import { Routes, Route } from "react-router-dom";

import App from "../App";

import HomePage from "../pages/HomePage";

import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import FAQ from "../pages/FAQ";
import HappyClients from "../pages/HappyClients";
import Contacts from "../pages/Contacts";


const RouterContainer = () => {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<HomePage />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="services" element={<Services />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="happy-clients" element={<HappyClients />} />
                <Route path="contacts" element={<Contacts/>} />
            </Route>
        </Routes>
    );
};

export default RouterContainer;