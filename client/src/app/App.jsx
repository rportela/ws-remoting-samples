import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./home";
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;
