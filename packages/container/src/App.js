import React from "react";
import MarketingApp from "./components/MyApp";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          {/* <Route path={"/pricing"}> */}
          <Header />
          <MarketingApp />
          {/* </Route> */}
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
