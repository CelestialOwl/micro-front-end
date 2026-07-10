import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ??
    createMemoryHistory({
      initialEntries: [initialPath],
    });
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate(obj) {
      const { pathname } = history.location;
      console.log(pathname, obj.pathname);
      if (pathname !== obj.pathname) {
        history.push(obj.pathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#auth-dev-root");

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
