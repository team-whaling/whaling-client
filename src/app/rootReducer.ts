import { combineReducers } from 'redux';
import { authReducer } from './auth/reducer';
import { coinReducer } from './coin/reducer';
import { voteReducer } from './vote/reducer';
const rootReducer = combineReducers({
  authReducer: authReducer,
  voteReducer: voteReducer,
  coinReducer: coinReducer,
});
export default rootReducer;
