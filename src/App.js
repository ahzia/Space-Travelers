import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsRequestRockets } from './redux/rockets/rockets';
import { fetchPostsRequestMissions } from './redux/missions/missions';
import { fetchPostsRequestDragons } from './redux/dragons/dragons';
import NavBar from './components/NavBar';
import Missions from './components/Mission';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import Dragons from './components/Dragons';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsRequestRockets());
    dispatch(fetchPostsRequestMissions());
    dispatch(fetchPostsRequestDragons());
  }, []);

  const rockets = useSelector((state) => state.rocket.rockets);
  const missions = useSelector((state) => state.mission.missions);
  const dragons = useSelector((state) => state.dragon.dragons);

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
              <Dragons dragons={dragons} />
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
