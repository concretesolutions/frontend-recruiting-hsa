import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from './Views/Home';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>

        {/* <Route path="/detalles">
        </Route>

        <Route path="/noEncontrado">
        </Route> */}

      </Switch>
    </Router>
  );
}

export default App;
