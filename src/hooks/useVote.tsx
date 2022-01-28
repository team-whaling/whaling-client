import React, { useEffect } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../app/store';
import {
  createVoteThunk,
  getVotesThunk,
  getVoteThunk,
} from '../app/vote/thunks';
import { ICreateVotePayload } from '../app/vote/types';
const useVote = () => {
  const dispatch = useAppDispatch();
  const votes = useAppSelector(
    (state: RootState) => state.voteReducer.getVoteReducer,
  );
  const getVote = (id: number) => {
    dispatch(getVoteThunk(id));
  };

  const getVotes = () => {
    dispatch(getVotesThunk());
  };

  const createVote = (payload: ICreateVotePayload) => {
    dispatch(createVoteThunk(payload));
  };

  return {
    votes,
    getVote,
    getVotes,
    createVote,
  };
};

export default useVote;
