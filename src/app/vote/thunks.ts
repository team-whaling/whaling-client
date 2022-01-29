import { ThunkAction } from 'redux-thunk';
import AlertModal from '../../components/modal/AlertModal';
import createAsyncThunk from '../../utils';
import api from '../api';
import { RootState } from '../store';
import { createVote, getVotes, postVote, setAlertModal } from './actions';
import { ICreateVotePayload, IPostVote, TAction } from './types';

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

export const postVoteThunk = (
  id: number,
  payload: IPostVote,
): ThunkAction<void, RootState, null, TAction> => {
  return async (dispatch) => {
    const { request, success, failure } = postVote;
    dispatch(request(undefined));
    try {
      const res = await api.requestPostVote(id, payload);
      dispatch(success(res));
    } catch (e: any) {
      dispatch(failure(e));
      dispatch(setAlertModal(true));
    }
  };
};
