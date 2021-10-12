import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavLink from './components/NavLink';
import Mission from './components/Mission';
import Rockets from './components/Rockets';
import MyProfile from "./components/MyProfile";
import Dragons from "./components/Dragons";

import './App.css';

function App() {
  return (
    <div>    
      <header>
        <NavLink />
      </header>
      <main>
        <Router>
          <Switch>
            <Route path="/Mission">
              <Mission />
            </Route>
            <Route path="/Dragons">
              <Dragons />
            </Route>
            <Route path="/MyProfile">
              <MyProfile />
            </Route>
            <Route path="/">
              <Rockets />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
