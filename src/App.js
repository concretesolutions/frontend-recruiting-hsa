import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../src/pages/Home';
import Result from '../src/pages/Result';
import './App.css';

function App() {
  return (
    <div>
          <BrowserRouter>
            <Switch>
                <Route path="/" exact render={props => <Home {...props}/>} />
                <Route path="/result" render={props => <Result {...props}/>} />
            </Switch>
        </ BrowserRouter>
    </div>
  );
}

export default App;
