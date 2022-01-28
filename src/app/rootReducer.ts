import { combineReducers } from 'redux';
import { authReducer } from './auth/reducer';
import { coinReducer } from './coin/reducer';
import { voteReducer } from './vote/reducer';
import loadingReducer from './loading/reducer';
const rootReducer = combineReducers({
  authReducer: authReducer,
  voteReducer: voteReducer,
  coinReducer: coinReducer,
  loadingReducer: loadingReducer,
});
export default rootReducer;
