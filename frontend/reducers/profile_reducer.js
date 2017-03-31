import { RECEIVE_PROFILE, RECEIVE_REPOS } from '../actions/profile_actions';

const profileReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_PROFILE:
      newState = Object.assign({}, state);
      newState.profile = action.profile.data;
      newState.message = action.profile.data.message;
      return newState;
    case RECEIVE_REPOS:
      newState = Object.assign({}, state);
      newState.repos = action.repos.data;
      return newState;
    default:
      return state;
  }
};

export default profileReducer;
