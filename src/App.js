import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPostsRequestRockets } from './redux/rockets/rockets';
import store from './redux/configureStore';
import NavBar from './components/NavBar';
import Missions from './components/Mission';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import Dragons from './components/Dragons';
import './App.css';

const App = () => {
  const [rockets, setRockets] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsRequestRockets());
  }, []);

  useEffect(() => {
    store.subscribe(() => {
      setRockets(store.getState().rocketReducer.rockets);
    });
  });
  return (
    <div>
      <Router>
        <header>
          <NavBar />
        </header>
        <main>
          <Switch>
            <Route path="/Mission">
              <Missions />
            </Route>
            <Route path="/Dragons">
              <Dragons />
            </Route>
            <Route path="/MyProfile">
              <MyProfile />
            </Route>
            <Route path="/">
              <Rockets rockets={rockets} />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
