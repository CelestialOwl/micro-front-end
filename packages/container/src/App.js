import React from "react";
import MarketingApp from "./components/MyApp";
import { BrowserRouter, Route } from "react-router-dom/";
import Header from "./components/Header";
import { Router } from "react-router-dom/cjs/react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        {/* <BrowserRouter> */}
        <Header />
        <MarketingApp />
        {/* </BrowserRouter> */}
      </StylesProvider>
    </div>
  );
};
