export const RECEIVE_PROFILE = "RECEIVE_PROFILE";

import * as APIUtil from '../util/profile_api_util';

export const receieveProfile = (profile) => ({
  type: RECEIVE_PROFILE,
  profile
});

export function fetchUser(){
  return (dispatch) => {
    return APIUtil.fetchUser().then(profile => {
      dispatch(receieveProfile(profile));
      return profile;
    });
  };
}
