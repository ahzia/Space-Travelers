import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { leaveDragon, reserveDragon } from '../redux/dragons/dragons';

const Dragons = (props) => {
  const dispatch = useDispatch();
  const { dragons } = props;

  return (
    <div className="container d-flex flex-column mx-5 my-2">
      {dragons.map((dragon) => (
        <div key={dragon.id} className="row d-flex my-2">
          <img className="col-md-3" src={dragon.flickr_images[0]} alt={dragon.name} />
          <div className="col-md-9">
            <h5>{dragon.name}</h5>
            <p className="">
              {dragon.reserved ? <p className="active d-inline">Reserved</p> : <div />}
              {dragon.description}
            </p>
            {dragon.reserved ? (
              <button type="button" className="btn btn-outline-dark" onClick={() => dispatch(leaveDragon(dragon.id))}>
                Cancel Reservation
              </button>
            ) : (
              <button type="button" className="btn btn-primary" onClick={() => dispatch(reserveDragon(dragon.id))}>
                Reserve Dragon
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

Dragons.defaultProps = {
  dragons: [],
};

Dragons.propTypes = {
  dragons: PropTypes.instanceOf(Array),
};

export default Dragons;
