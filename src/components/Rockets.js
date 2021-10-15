import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { leaveRocket, reserveRocket } from '../redux/rockets/rockets';

const Rockets = (props) => {
  const { rockets } = props;
  const dispatch = useDispatch();

  return (
    <div className="container d-flex flex-column mx-5 my-2">
      {rockets.map((rocket) => (
        <div key={rocket.rocket_id} className="row d-flex my-2">
          <img className="col-md-3" src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
          <div className="col-md-9">
            <h5>{rocket.rocket_name}</h5>
            <p className="">
              {rocket.reserved ? <p className="active d-inline">Reserved</p>
                : <div />}
              {rocket.description}
            </p>
            {rocket.reserved ? (
              <button type="button" className="btn btn-outline-dark" onClick={() => dispatch(leaveRocket(rocket.rocket_id))}>
                Cancel Reservation
              </button>
            ) : (
              <button type="button" className="btn btn-primary" onClick={() => dispatch(reserveRocket(rocket.rocket_id))}>
                Recerve Rocket
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

Rockets.propTypes = {
  rockets: PropTypes.instanceOf(Array).isRequired,
};

export default Rockets;
