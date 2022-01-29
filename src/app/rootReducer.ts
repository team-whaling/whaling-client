import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/reducer';
import { coinReducer } from './coin/reducer';
import { voteReducer } from './vote/reducer';
import loadingReducer from './loading/reducer';
const persistConfig = {
  key: 'root',
  // localStorage에 저장합니다.
  storage,
  // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
  whitelist: ['authReducer', 'voteReducer', 'coinReducer'],
  // blacklist -> 그것만 제외합니다
};
const rootReducer = combineReducers({
  authReducer: authReducer,
  voteReducer: voteReducer,
  coinReducer: coinReducer,
  loadingReducer: loadingReducer,
});

export default persistReducer(persistConfig, rootReducer);
