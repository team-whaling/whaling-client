import React, { useEffect } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../app/store';
import { getVotesThunk } from '../app/vote/thunks';
const useVote = () => {
  const dispatch = useAppDispatch();
  const votes = useAppSelector((state: RootState) => state.voteReducer);
  const id = 1;
  useEffect(() => {
    dispatch(getVotesThunk(id));
  });
  return {
    votes,
  };
};

export default useVote;
