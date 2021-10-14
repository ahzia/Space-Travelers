/* eslint-disable max-len */
/* eslint-disable camelcase */
import getData from '../../api/spacexData';

const FETCH_LOADING = 'FETCH_LOADING';
const FETCH_SUCCESS_MISSIONS = 'FETCH_SUCCESS_MISSIONS';
const FETCH_ERROR = 'FETCH_ERROR';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

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

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

export const fetchPostsRequestMissions = () => async (dispatch) => {
  dispatch(fetchPostsLoading());
  getData('missions').then((result) => {
    dispatch(
      fetchPostsSuccessMissions(
        result.map((mission) => {
          const selectedData = (({ mission_id, mission_name, description }) => ({
            mission_id,
            mission_name,
            description,
            reserved: false,
          }))(mission);
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

    case JOIN_MISSION:
      return {
        ...state,
        missions: [...state.missions.map((mission) => (mission.mission_id === action.payload ? { ...mission, reserved: true } : mission))],
      };

    case LEAVE_MISSION:
      return {
        ...state,
        missions: [...state.missions.map((mission) => (mission.mission_id === action.payload ? { ...mission, reserved: false } : mission))],
      };

    default:
      return state;
  }
};

export default reducer;
