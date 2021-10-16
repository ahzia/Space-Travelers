import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'; // useSelectors
import { fetchPostsRequestRockets } from './redux/rockets/rockets';
import { fetchPostsRequestMissions } from './redux/missions/missions';
import store from './redux/configureStore';
import NavBar from './components/NavBar';
import Missions from './components/Mission';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import Dragons from './components/Dragons';
import './App.css';

const App = () => {
  const [rockets, setRockets] = useState([]);
  const [missions, setMissons] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsRequestMissions());
    dispatch(fetchPostsRequestRockets());
  }, []);

  // const missions = useSelector((state) => state.spaceReducer.missions);
  // const rockets = useSelector((state) => state.spaceReducer.rockets);

  useEffect(() => {
    store.subscribe(() => {
      setRockets(store.getState().rocket.rockets);
      setMissons(store.getState().mission.missions);
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
              <Missions missions={missions} />
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
