import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom"; 
import Search from './components/Search';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
        <div className="App">
          <Search/>  
        </div>
        </Route>
      </Switch>
    </Router>    
  );
}

export default App;
