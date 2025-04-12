import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

import "./styles/global.css"


const App: React.FC = () => {
  return (
    <>
      <Header />

      <Outlet/>

      <Footer />
    </>
  );
};

// export app
export default App;

