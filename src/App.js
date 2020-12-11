import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import index from "./Pages/Index/index";
import Details from "./Pages/Details/details";
import notFound from "./Pages/NotFound/notFound";
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={index} />
        <Route path="/details" component={Details} />
        <Route path="/notFound" component={notFound} />
      </Switch>
    </BrowserRouter>
  );
}
