import { RECEIVE_ISSUES, DELETE_ISSUE, RECEIVE_ISSUE } from '../actions/issue_actions';

const issueReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ISSUES:
      newState = Object.assign({}, state);
      newState.issues = action.issues.data;
      return newState;
    case RECEIVE_ISSUE:
      newState = Object.assign({}, state);
      newState.newIssue = action.issue;
      return newState;
    case DELETE_ISSUE:
      newState = Object.assign({}, state);
      newState.deletedIssues = action.issue;
      return newState;
    default:
      return state;

  }
};

export default issueReducer;
