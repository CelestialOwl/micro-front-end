import React from "react";
import MarketingApp from "./components/MyApp";
import { BrowserRouter, Route } from "react-router-dom/";
import Header from "./components/Header";
import { Router } from "react-router-dom/cjs/react-router-dom";

export default () => {
  return (
    <div>
      {/* <BrowserRouter> */}
      <Header />
      <MarketingApp />
      {/* </BrowserRouter> */}
    </div>
  );
};
