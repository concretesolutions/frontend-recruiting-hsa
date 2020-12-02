import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Details from "./views/Details";
import NotFound from "./views/NotFound";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route
      path="/users/:user"
      render={({ match }) => {
        // Utilizar render nos permite abstraer el routing fuera del componente
        // de esta manera Detail recibe el movieId en lugar de recibir el
        // match del router, con lo que reducimos su acoplamiento.
        const { user } = match.params;
        return <Details user={user} />;
      }}
    />
    <Route path="/notfound" component={NotFound} />
  </Switch>
);

export default Routes;

export const routes = {
  home: () => "/",
  details: (user) => `/users/${user}`,
  notfound: () => "/notfound",
};
