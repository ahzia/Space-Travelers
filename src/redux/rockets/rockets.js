/* eslint-disable camelcase */
import getData from '../../api/spacexData';

const FETCH_LOADING = 'FETCH_LOADING';
const FETCH_SUCCESS_ROCKETS = 'FETCH_SUCCESS_ROCKETS';
const FETCH_ERROR = 'FETCH_ERROR';

const initialState = {
  loading: true,
  missions: [],
  userMissions: [],
};

export const fetchPostsSuccessRockets = (payload) => ({
  type: FETCH_SUCCESS_ROCKETS,
  payload,
});

export const fetchPostsError = () => ({
  type: FETCH_ERROR,
});

export const fetchPostsLoading = () => ({
  type: FETCH_LOADING,
});

export const fetchPostsRequestRokets = () => async (dispatch) => {
  dispatch(fetchPostsLoading());
  getData('rockets').then((result) => {
    dispatch(
      fetchPostsSuccessRockets(
        result.map((rockets) => {
          const selectedData = (({
            id, name, type, flickr_images,
          }) => ({
            id,
            name,
            type,
            flickr_images,
            join: false,
          }))(rockets);
          return selectedData;
        }),
      ),
    );
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        rockets: [...state.rockets],
        loading: true,
      };

    case FETCH_SUCCESS_ROCKETS:
      return {
        loading: false,
        rockets: action.payload,
      };

    case FETCH_ERROR:
      return {
        loading: false,
        rockets: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
