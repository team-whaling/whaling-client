import { ThunkAction } from 'redux-thunk';
import createAsyncThunk from '../../utils';
import api from '../api';
import { RootState } from '../store';
import { createVote, getVote, getVotes } from './actions';
import { ICreateVotePayload, TAction } from './types';
export const getVoteThunk = (
  id: number,
): ThunkAction<void, RootState, null, TAction> => {
  return async (dispatch) => {
    const { request, success, failure } = getVote;
    dispatch(request(undefined));
    try {
      const res = await api.requestGetVote(id);
      dispatch(success(res));
    } catch (e: any) {
      dispatch(failure(e));
    }
  };
};

export const getVotesThunk = (): ThunkAction<
  void,
  RootState,
  null,
  TAction
> => {
  return async (dispatch) => {
    const { request, success, failure } = getVotes;
    dispatch(request(undefined));
    try {
      const res = await api.requestGetVotes();
      dispatch(success(res));
    } catch (e: any) {
      dispatch(failure(e));
    }
  };
};

export const createVoteThunk = (
  payload: ICreateVotePayload,
): ThunkAction<void, RootState, null, TAction> => {
  return async (dispatch) => {
    const { request, success, failure } = createVote;
    dispatch(request(undefined));
    try {
      const res = await api.requestCreateVote(payload);
      dispatch(success(res));
    } catch (e: any) {
      dispatch(failure(e));
    }
  };
};
