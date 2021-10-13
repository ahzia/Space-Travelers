import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPostsRequestMissions } from '../redux/missions/missions';
import './Mission.css';

const Missions = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsRequestMissions());
  }, []);

  const { missions } = props;

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

Missions.propTypes = {
  missions: PropTypes.instanceOf(Array).isRequired,
};

export default Missions;
