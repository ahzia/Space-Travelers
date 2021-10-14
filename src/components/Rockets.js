import './Mission.css';
import PropTypes from 'prop-types';

const Rockets = (props) => {
  const { rockets } = props;
  return (
    <div className="container d-flex flex-column mx-5 my-2">
      {rockets.map((rocket) => (
        <div key={rocket.rocket_id} className="row d-flex my-2">
          <img className="col-md-3" src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
          <div className="col-md-9">
            <div className="name title">{rocket.rocket_name}</div>
            <div className="description">{rocket.description}</div>
            <button type="button" className="btn btn-primary">Recerve Rocket</button>
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
