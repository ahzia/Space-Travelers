/* eslint-disable camelcase */
import getData from '../../api/spacexData';

const FETCH_LOADING = 'FETCH_LOADING';
const FETCH_SUCCESS_DRAGONS = 'FETCH_SUCCESS_DRAGONS';
const FETCH_ERROR = 'FETCH_ERROR';

const initialState = {
  loading: true,
  dragons: [],
  userDragons: [],
};

export const fetchPostsSuccessDragons = (payload) => ({
  type: FETCH_SUCCESS_DRAGONS,
  payload,
});

export const fetchPostsError = () => ({
  type: FETCH_ERROR,
});

export const fetchPostsLoading = () => ({
  type: FETCH_LOADING,
});

export const fetchPostsRequestDragons = () => async (dispatch) => {
  dispatch(fetchPostsLoading());
  getData('dragons').then((result) => {
    dispatch(
      fetchPostsSuccessDragons(
        result.map((dragon) => {
          const selectedData = (({ dragon_id, dragon_name, description }) => ({
            dragon_id,
            dragon_name,
            description,
            join: false,
          }))(dragon);
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

    default:
      return state;
  }
};

export default reducer;
