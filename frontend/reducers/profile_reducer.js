import { RECEIVE_PROFILE } from '../actions/profile_actions';

const profileReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_PROFILE:
      newState = Object.assign({}, state);
      newState.profile = action.profile.data;
      return newState;
    default:
      return state;
  }
};

export default profileReducer;
