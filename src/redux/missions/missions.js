/* eslint-disable camelcase */
import spaceData from '../../API/spacedata';

const FETCH_LOADING = 'FETCH_LOADING';
const FETCH_SUCCESS_MISSIONS = 'FETCH_SUCCESS_MISSIONS';
const FETCH_ERROR = 'FETCH_ERROR';

const initialState = {
  loading: true,
  missions: [],
  userMissions: [],
};

export const fetchPostsSuccessMissions = (payload) => ({
  type: FETCH_SUCCESS_MISSIONS,
  payload,
});

export const fetchPostsError = () => ({
  type: FETCH_ERROR,
});

export const fetchPostsLoading = () => ({
  type: FETCH_LOADING,
});

export const fetchPostsRequestMissions = () => async (dispatch) => {
  dispatch(fetchPostsLoading());
  const request = await fetch(spaceData.missions);
  const result = await request.json();
  dispatch(
    fetchPostsSuccessMissions(
      result.map((mission) => {
        const selectedData = (({ mission_id, mission_name, description }) => ({
          mission_id,
          mission_name,
          description,
          join: false,
        }))(mission);
        return selectedData;
      }),
    ),
  );
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        missions: [...state.missions],
        loading: true,
      };

    case FETCH_SUCCESS_MISSIONS:
      return {
        loading: false,
        missions: action.payload,
      };

    case FETCH_ERROR:
      return {
        loading: false,
        missions: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
