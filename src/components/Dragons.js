import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPostsRequestDragons } from '../redux/dragons/dragons';
import store from '../redux/configureStore';

const dragons = () => {
  const [dragons, setdragons] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    store.subscribe(() => {
      setdragons(store.getState().dragonReducer.dragons);
    });
  });

  useEffect(() => {
    dispatch(fetchPostsRequestDragons());
  }, []);

  return (
    <div className="container d-flex flex-column mx-5 my-2">
      {dragons.map((dragon) => (
        <div key={dragon.dragon_id} className="row d-flex my-2">
          <img
            className="col-md-3"
            src={dragon.flickr_images[0]}
            alt={dragon.dragon_name}
          />
          <div className="col-md-9">
            <h5>{dragon.dragon_name}</h5>
            <p>{dragon.description}</p>
            <button type="button" className="btn btn-primary">
              Reserve dragon
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default dragons;
