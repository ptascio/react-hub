import { createStore, applyMiddleware } from 'redux';
import profileReducer from '../reducers/profile_reducer';
import thunkMiddleware from '../middleware/thunk';

const middleware = [];
middleware.push(thunkMiddleware);

const configureStore = (preloadedState = {}) => (
  createStore(
    profileReducer,
    preloadedState,
    applyMiddleware(...middleware)
  )
);

export default configureStore;
