import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missions';

import './Mission.css';

const Missions = (props) => {
  const dispatch = useDispatch();
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
            <li className="status">{mission.reserved ? <div className="active">Active Member</div> : <div className="no__active">Not A Member</div>}</li>
            <li className="loading">
              {mission.reserved === true ? (
                <button type="button" className="btn btn-outline-success" onClick={() => dispatch(leaveMission(mission.mission_id))}>
                  Leave Mission
                </button>
              ) : (
                <button type="button" className="btn btn-outline-dark" onClick={() => dispatch(joinMission(mission.mission_id))}>
                  Join Mission
                </button>
              )}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

Missions.defaultProps = {
  missions: [],
};

Missions.propTypes = {
  missions: PropTypes.instanceOf(Array),
};

export default Missions;
