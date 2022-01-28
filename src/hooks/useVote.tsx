import React, { useEffect } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../app/store';
import { createVoteThunk, getVotesThunk } from '../app/vote/thunks';
import { ICreateVotePayload } from '../app/vote/types';
const useVote = () => {
  const dispatch = useAppDispatch();
  const votes = useAppSelector((state: RootState) => state.voteReducer);
  const getVotes = (id: number) => {
    dispatch(getVotesThunk(id));
  };

  const createVote = (payload: ICreateVotePayload) => {
    dispatch(createVoteThunk(payload));
  };

  return {
    votes,
    getVotes,
    createVote,
  };
};

export default useVote;
