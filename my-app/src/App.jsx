import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { ConsumerProvider } from './Context/ConsumerContext'
import { Navbar } from './Components/Navbar';
import Home from './View/Home.jsx';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/" exact>
          <ConsumerProvider>
            <Home />
          </ConsumerProvider>
        </Route>

        <Route path="/results">
          <ConsumerProvider>
            <Navbar />
          </ConsumerProvider>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;