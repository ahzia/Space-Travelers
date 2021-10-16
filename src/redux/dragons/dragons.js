/* eslint-disable max-len */
/* eslint-disable camelcase */
import getData from '../../api/spacexData';

const FETCH_LOADING = 'FETCH_LOADING';
const FETCH_SUCCESS_DRAGONS = 'FETCH_SUCCESS_DRAGONS';
const FETCH_ERROR = 'FETCH_ERROR';
const RESERVE_DRAGON = 'RESERVE_DRAGON';
const LEAVE_DRAGON = 'LEAVE_DRAGON';

const initialState = {
  loading: true,
  dragons: [],
  userDragons: [],
};

export const fetchPostsLoading = () => ({
  type: FETCH_LOADING,
});

export const fetchPostsSuccessDragons = (payload) => ({
  type: FETCH_SUCCESS_DRAGONS,
  payload,
});

export const fetchPostsError = () => ({
  type: FETCH_ERROR,
});

export const reserveDragon = (payload) => ({
  type: RESERVE_DRAGON,
  payload,
});

export const leaveDragon = (payload) => ({
  type: LEAVE_DRAGON,
  payload,
});

export const fetchPostsRequestDragons = () => async (dispatch) => {
  dispatch(fetchPostsLoading());
  getData('dragons').then((result) => {
    dispatch(
      fetchPostsSuccessDragons(
        result.map((dragon) => {
          const selectedData = (({ id, name, description, flickr_images }) => ({
            id,
            name,
            description,
            flickr_images,
            reserved: false,
          }))(dragon);
          return selectedData;
        })
      )
    );
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        dragons: [...state.dragons],
        loading: true,
      };

    case FETCH_SUCCESS_DRAGONS:
      return {
        loading: false,
        dragons: action.payload,
      };

    case FETCH_ERROR:
      return {
        loading: false,
        dragons: [],
        error: action.payload,
      };

    case RESERVE_DRAGON:
      return {
        ...state,
        dragons: [...state.dragons.map((dragon) => (dragon.id === action.payload ? { ...dragon, reserved: true } : dragon))],
      };

    case LEAVE_DRAGON:
      return {
        ...state,
        dragons: [...state.dragons.map((dragon) => (dragon.id === action.payload ? { ...dragon, reserved: false } : dragon))],
      };

    default:
      return state;
  }
};

export default reducer;
