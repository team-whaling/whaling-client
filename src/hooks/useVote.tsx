import React, { useEffect } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../app/store';
import { createVoteThunk, getVotesThunk } from '../app/vote/thunks';
import { ICreateVotePayload } from '../app/vote/types';
const useVote = () => {
  const dispatch = useAppDispatch();
  const votes = useAppSelector((state: RootState) => state.voteReducer.votes);
  const voteId: any = useAppSelector(
    (state: RootState) => state.voteReducer.create,
  );
  const getVote = (id: number) => {
    return votes.filter((vote) => vote.vote_id === id)[0];
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
    voteId,
  };
};

export default useVote;
