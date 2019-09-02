import {combineReducers} from 'redux';
import users from './reducers/usersReducer';

const rootReducer = combineReducers({
  users
});

export default rootReducer;
