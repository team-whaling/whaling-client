import React, { useEffect } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../app/store';
import { getCoinsThunk } from '../app/coin/thunks';

const useCoin = () => {
  const dispatch = useAppDispatch();
  const coinList = useAppSelector((state: RootState) => state.coinReducer);
  useEffect(() => {
    dispatch(getCoinsThunk());
  });

  return { coinList };
};
export default useCoin;
