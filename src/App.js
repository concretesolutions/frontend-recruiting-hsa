import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Home } from "./home"
import { UserDetail } from "./users"
import { Header, Footer } from "./layouts"
import './assets/styles/App.scss';

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
