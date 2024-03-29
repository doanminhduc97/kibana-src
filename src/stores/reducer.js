import auth from './reducers/auth';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  auth,
  router: routerReducer
});
