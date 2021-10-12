import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';
import Mission from './components/Mission';
import Rockets from './components/Rockets';
import MyProfile from "./components/MyProfile";
import Dragons from "./components/Dragons";

import './App.css';

function App() {
  return (
    <div>   
              <Router> 
      <header>
        <NavBar />
      </header>
      <main>

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
      
      </main>
      </Router>
    </div>
  );
}

export default App;
