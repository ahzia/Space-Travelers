import React from 'react';
import { useSelector } from 'react-redux';
import './ProfileMission.css';

const ProfileMissions = () => {
  const missions = useSelector((state) => state.spaceReducer.missions);
  const missionJoined = missions.filter((mission) => mission.reserved === true);

  return (
    <div>
      <h3 className="joined__mission__title">{missionJoined.length > 0 ? 'My Missions' : 'No Missions joined!'}</h3>
      <div className="joined__mission__container">
        {missionJoined.map((join) => (
          <div key={join.mission_id}>
            <div>{join.reserved === true ? <p className="joined__mission__item border">{join.mission_name}</p> : <p>{null}</p>}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileMissions;
