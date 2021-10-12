/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import './Mission.css';

const Missions = (props) => {
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
