import { combineReducers } from 'redux';
import { authReducer } from './auth/reducer';
import { voteReducer } from './vote/reducer';
const rootReducer = combineReducers({
  authReducer: authReducer,
  voteReducer: voteReducer,
});
export default rootReducer;
