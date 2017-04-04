export const RECEIVE_ISSUES = "RECEIVE_ISSUES";
export const DELETE_ISSUE = "DELETE_ISSUE";
export const RECEIVE_ISSUE = "RECEIVE_ISSUE";

import * as APIUtil from '../util/issues_api_util';

export const receieveIssues = (issues) => ({
  type: RECEIVE_ISSUES,
  issues
});

export const receiveIssue = (issue) => ({
  type: RECEIVE_ISSUE,
  issue
});

export const deleteIssue = (issue) => ({
  type: DELETE_ISSUE,
  issue
});

export function fetchRepoIssues(repo){
  return (dispatch) => {
    return APIUtil.fetchRepoIssues(repo).then(issues => {
      dispatch(receieveIssues(issues));
      return issues;
    });
  };
}

export function createIssue(repo, issue){
  return (dispatch) => {
    return APIUtil.createIssue(repo, issue).then(newIssue => {
      dispatch(receiveIssue(newIssue));
    });
  };
}

export function closeRepoIssue(issue, data, name){
  return (dispatch) => {
    return APIUtil.closeRepoIssue(issue, data, name).then(delIssue => {
      dispatch(deleteIssue(delIssue));
    });
  };
}
