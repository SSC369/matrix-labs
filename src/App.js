import React from "react";
import { Route, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import LeftBar from "./components/leftbar/LeftBar";
import Navbar from "./components/navbar/Navbar";
import Token from "./components/token/Token";
import PairAddress from "./components/pair/Pair";
import Address from "./components/address/Address";
import Home from "./components/home/Home";

import "./App.css";

const App = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 992px)" });
  return (
    <>
      {isBigScreen ? (
        <>
          <div className="large-screen-view">
            <LeftBar />
            <Routes>
              <Route path="/" Component={Token} />
              <Route path="/pair" Component={PairAddress} />
            </Routes>
          </div>
          <div className="footer"></div>
        </>
      ) : (
        <>
          <Navbar />
          <Home />
          <div className="footer"></div>
        </>
      )}
    </>
  );
};

export default App;
