import React from "react";
import Home from "./views/Home";
import { Router } from "react-router-dom";
import Routes, { routes } from "./Routes";
import history from "./config/historyRouter";
import { configureAxios } from "./webservices";

configureAxios();

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
