import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Blog from "./routes/Blog";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Blog} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
