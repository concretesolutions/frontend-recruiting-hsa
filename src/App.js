import React from "react";
import Home from "./views/Home";
import { Router } from "react-router-dom";
import Routes, { routes } from "./Routes";
import history from "./config/historyRouter";
import { configureAxios } from "./webservices";
import { GlobalProvider } from "./context/GlobalState";

configureAxios();

function App() {
  return (
    <GlobalProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </GlobalProvider>
  );
}

export default App;
