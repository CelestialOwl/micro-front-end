import React, { lazy, Suspense, useState } from "react";
import { Route, Switch, Router, Redirect } from "react-router-dom";
import Header from "./components/Header";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Progress from "./components/Progress";
import { createBrowserHistory } from "history";
import { useEffect } from "react";

const MarketingLazy = lazy(() => import("./components/MyApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy = lazy(() => import("./components/DashboardApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory({});

const App = () => {
  const [isSignedIn, setIsSignedin] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    }
  }, [isSignedIn]);
  console.log("signeid in state", isSignedIn);
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Header
            signedIn={isSignedIn}
            onSignOut={() => setIsSignedin(false)}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedin(true)} />
              </Route>
              <Route path="/dashboard">
                {!isSignedIn && <Redirect to="/" />}
                <DashboardLazy />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </Router>
      </StylesProvider>
    </div>
  );
};
export default App;
