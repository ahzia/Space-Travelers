/* eslint-disable camelcase */
import getData from '../../api/spacexData';

const FETCH_LOADING = 'FETCH_LOADING';
const FETCH_SUCCESS_ROCKETS = 'FETCH_SUCCESS_ROCKETS';
const FETCH_ERROR = 'FETCH_ERROR';
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const LEAVE_ROCKET = 'LEAVE_ROCKET';

const initialState = {
  loading: true,
  rockets: [],
  userRockets: [],
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

export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

export const leaveRocket = (payload) => ({
  type: LEAVE_ROCKET,
  payload,
});

export const fetchPostsRequestRockets = () => async (dispatch) => {
  dispatch(fetchPostsLoading());
  getData('rockets').then((result) => {
    dispatch(
      fetchPostsSuccessRockets(
        result.map((rockets) => {
          const selectedData = (({
            rocket_id, rocket_name, description, flickr_images,
          }) => ({
            rocket_id,
            rocket_name,
            description,
            flickr_images,
            reserved: false,
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

    case RESERVE_ROCKET:
      return {
        ...state,
        rockets: [...state.rockets.map((rocket) => (rocket.rocket_id === action.payload
          ? { ...rocket, reserved: true } : rocket))],
      };

    case LEAVE_ROCKET:
      return {
        ...state,
        rockets: [...state.rockets.map((rocket) => (rocket.rocket_id === action.payload
          ? { ...rocket, reserved: false } : rocket))],
      };

    default:
      return state;
  }
};

export default reducer;
