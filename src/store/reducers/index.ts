import { combineReducers } from 'redux';
import user from './user';
import music from './music';
import tags from './tags';

export default combineReducers({
  user,
  music,
  tags,
})
