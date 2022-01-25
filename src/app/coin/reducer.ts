import { createReducer } from 'typesafe-actions';
import { getCoins } from './actions';
import { TAction, ICoinList } from './types';

const initialState = [
  {
    code: '',
    krname: '',
    image: '',
  },
];

export const coinReducer = createReducer<ICoinList[], TAction>(
  initialState,
).handleAction(getCoins.success, (state, action) => {
  return action.payload;
});
