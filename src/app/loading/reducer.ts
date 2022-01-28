import { createReducer } from 'typesafe-actions';
import { setCheckingTokenLoading, setGettingTokenLoading } from './actions';
import { ILoadingReducer, TAction } from './types';

const initialState: ILoadingReducer = {
  checkigToken: false,
  gettingToken: false,
};

const reducer = createReducer<ILoadingReducer, TAction>(initialState, {})
  .handleAction(setCheckingTokenLoading, (state, action) => ({
    ...state,
    checkigToken: action.payload,
  }))
  .handleAction(setGettingTokenLoading, (state, action) => ({
    ...state,
    gettingToken: action.payload,
  }));

export default reducer;
