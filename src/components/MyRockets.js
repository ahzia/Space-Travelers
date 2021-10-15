import React from 'react';
import { useSelector } from 'react-redux';
import './ProfileMission.css';

const MyRockets = () => {
  const rockets = useSelector((state) => state.rocketReducer.rockets);
  const rocketsReserved = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div>
      <h3 className="joined__mission__title">{rocketsReserved.length > 0 ? 'My Rockets' : 'No Rockets Reserved!'}</h3>
      <div className="joined__mission__container">
        {rocketsReserved.map((join) => (
          <div key={join.rocket_id}>
            <div>{join.reserved === true ? <p className="joined__mission__item border">{join.rocket_name}</p> : <p>{null}</p>}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRockets;
