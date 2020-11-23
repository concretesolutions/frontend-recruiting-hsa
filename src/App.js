import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Home } from "./home"
import { Header, Footer } from "./layouts"
import { UserDetail } from "./users"

import './assets/styles/App.scss';
import "font-awesome/css/font-awesome.min.css";


function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
          <div className= "appWidth">
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path='/users/:id' component={UserDetail}/>
            <Route path='/users/:id/repos' component={UserDetail}/>
          </Switch>
          </div>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;
