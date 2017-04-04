import React from 'react';
import ReactDOM from 'react-dom';
import ProfileContainer from './components/profile/profile_container.jsx';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={store}/>, root);
});
