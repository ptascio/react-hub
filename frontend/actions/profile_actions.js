export const RECEIVE_PROFILE = "RECEIVE_PROFILE";
export const RECEIVE_REPOS = "RECEIVE_REPOS";

import * as APIUtil from '../util/profile_api_util';

export const receieveProfile = (profile) => ({
  type: RECEIVE_PROFILE,
  profile
});

export const receieveRepos = (repos) => ({
  type: RECEIVE_REPOS,
  repos
});

export function fetchUser(username){
  return (dispatch) => {
    return APIUtil.fetchUser(username).then(profile => {
      dispatch(receieveProfile(profile));
      return profile;
    });
  };
}

export function fetchRepos(username){
  return (dispatch) => {
    return APIUtil.fetchRepos(username).then(repos => {
      dispatch(receieveRepos(repos));
      return repos;
    });
  };
}
