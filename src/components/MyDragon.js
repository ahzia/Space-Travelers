import React from 'react';
import { useSelector } from 'react-redux';
import './ProfileMission.css';

const MyDragons = () => {
  const dragons = useSelector((state) => state.dragon.dragons);
  const dragonsReserved = dragons.filter((dragon) => dragon.reserved === true);

  return (
    <div>
      <h3 className="joined__mission__title">{dragonsReserved.length > 0 ? 'My Dragons' : 'No Dragons Reserved!'}</h3>
      <div className="joined__mission__container">
        {dragonsReserved.map((join) => (
          <div key={join.id}>
            <div>{join.reserved === true ? <p className="joined__mission__item border">{join.name}</p> : <p>{null}</p>}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDragons;
