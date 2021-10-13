import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import Missions from './components/Mission';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import Dragons from './components/Dragons';

import './App.css';

function App() {
  const missions = useSelector((state) => state.spaceReducer.missions);
  return (
    <div>
      <Router>
        <header>
          <NavBar />
        </header>
        <main>
          <Switch>
            <Route path="/Mission">
              <Missions missions={missions} />
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
