import { combineReducers } from 'redux';

import groups from './groups_reducer';
import users from './users_reducer';

export default combineReducers({

  groups,
  users,
});
