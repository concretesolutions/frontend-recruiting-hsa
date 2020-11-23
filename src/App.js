import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './home';
import Result from './result';
import './css/style.css';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/result" component={Result} />
      <Route exact path="/result/:username" component={Result} />
    </Switch>
  </Router>
  
);

export default App;
