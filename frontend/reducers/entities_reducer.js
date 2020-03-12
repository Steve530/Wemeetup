import { combineReducers } from 'redux';

import groups from './groups_reducer';
// import reviews from './reviews_reducer';
import users from './users_reducer';

export default combineReducers({
  // benches,
  // reviews,
  groups,
  users,
});
