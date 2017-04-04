import { combineReducers } from 'redux';

import profileReducer from './profile_reducer';
import issuesReducer from './issues_reducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  issues: issuesReducer
});

export default rootReducer;
