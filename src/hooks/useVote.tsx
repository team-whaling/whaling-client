import React, { useEffect } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../app/store';
import {
  createVoteThunk,
  getVotesThunk,
  postVoteThunk,
} from '../app/vote/thunks';
import { ICreateVotePayload, IPostVote } from '../app/vote/types';
const useVote = () => {
  const dispatch = useAppDispatch();
  const votes = useAppSelector((state: RootState) => state.voteReducer.votes);
  const voteId: any = useAppSelector(
    (state: RootState) => state.voteReducer.create,
  );
  const coinError = useAppSelector(
    (state: RootState) => state.voteReducer.coinError,
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

  const postVote = (id: number, choice: IPostVote) => {
    dispatch(postVoteThunk(id, choice));
  };

  return {
    votes,
    getVote,
    getVotes,
    createVote,
    postVote,
    voteId,
    coinError,
  };
};

export default useVote;
