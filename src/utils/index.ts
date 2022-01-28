import axios from '../app/CustomAxios';
import { Dispatch } from 'redux';
import { AsyncActionCreatorBuilder } from 'typesafe-actions';

type IAnyAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>;

export default function createAsyncThunk<
  A extends IAnyAsyncActionCreator,
  F extends (...params: any[]) => Promise<any>,
>(asyncActionCreator: A, promiseCreator: F) {
  type Params = Parameters<F>;
  return function thunk(...params: Params) {
    return async (dispatch: Dispatch) => {
      const { request, success, failure } = asyncActionCreator;
      dispatch(request(undefined));
      try {
        const result = await promiseCreator(...params);
        dispatch(success(result));
      } catch (e) {
        dispatch(failure(e));
      }
    };
  };
}

export const setLocalStorage = ({
  access_token,
  refresh_token,
}: {
  access_token: string;
  refresh_token: string;
}) => {
  window.localStorage.setItem('access_token', JSON.stringify(access_token));
  window.localStorage.setItem('refresh_token', JSON.stringify(refresh_token));
  axios.defaults.headers.common = {
    Authorization: `Bearer ${access_token}`,
  };
};

export const setAccessToken = (access_token: string) => {
  window.localStorage.removeItem('access_token');
  window.localStorage.setItem('access_token', JSON.stringify(access_token));
  axios.defaults.headers.common = {
    Authorization: `Bearer ${access_token}`,
  };
};

export const initializeLocalStorage = () => {
  window.localStorage.removeItem('code');
  window.localStorage.removeItem('access_token');
  window.localStorage.removeItem('refresh_token');
  axios.defaults.headers.common = {};
};
