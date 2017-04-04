import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import ProfileContainer from './profile/profile_container.jsx';
import IssuesContainer from './issues/issue_container';
import App from './app';

const Root = ({ store }) => {
  return(
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={ ProfileContainer } />
          <Route path='issues/:reponame' component={ IssuesContainer }/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
