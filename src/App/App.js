import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Contact from "../Contact";
import Header from "../Header";
import Home from "../Home";
import Education from "../Sections/Education";
import Facts from "../Sections/Facts";
import './App.css';


function App() {
  return (
    <Router>
        <Header/>

        <Switch>

          <Route exact path='/'>
            <Home/>
            <Facts/>
          </Route>

          <Route path='/resume'>
              <Education/>
          </Route>

          <Route path='/contact'>
              <Contact/>
          </Route>

        </Switch>
    </Router>
  );
}

export default App;
