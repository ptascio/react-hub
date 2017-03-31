import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import ProfileContainer from './components/profile/profile_container.jsx';

const Root = ({ store }) => {
  return(
    <Provider store={ store }>
      <Route path='/' component={ ProfileContainer }></Route>
    </Provider>
  );
};

export default Root;
