import { ThunkAction } from 'redux-thunk';
import createAsyncThunk from '../../utils';
import api from '../api';
import { RootState } from '../store';
import { getVotes } from './actions';
import { TAction } from './types';
export const getVotesThunk = (
  id: number,
): ThunkAction<void, RootState, null, TAction> => {
  return async (dispatch) => {
    const { request, success, failure } = getVotes;
    dispatch(request(undefined));
    try {
      const res = await api.requestGetVotes(id);
      dispatch(success(res));
    } catch (e: any) {
      dispatch(failure(e));
    }
  };
};
