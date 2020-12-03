import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './View/Home.jsx';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/" exact>
            <Home />
        </Route>

        <Route path="/results">
          
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
