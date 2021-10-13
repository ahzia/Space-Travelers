import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPostsRequestMissions } from '../redux/missions/missions';
import store from '../redux/configureStore';
import './Mission.css';

const Missions = () => {
  const [missions, setMissions] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsRequestMissions());
  }, []);

  useEffect(() => {
    store.subscribe(() => {
      setMissions(store.getState().missionReducer.missions);
    });
  });

  return (
    <div className="mission__container">
      <div className="mission_title">
        <ul>
          <li className="name title">Mission</li>
          <li className="description title">Description</li>
          <li className="status title">Status</li>
          <li className="loading"> </li>
        </ul>
      </div>
      <div className="mission_title">
        {missions.map((mission) => (
          <ul key={mission.mission_id}>
            <li className="name title">{mission.mission_name}</li>
            <li className="description">{mission.description}</li>
            <li className="status"> </li>
            <li className="loading"> </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Missions;
