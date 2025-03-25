import React from "react";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";

// main component of the app
const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

// export app
export default App;

