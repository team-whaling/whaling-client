import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export interface IUser {
  nickname: string;
}

export interface IAuthReducer {
  user: IUser;
  authorized: boolean;
}

export interface IGetAccessToken {
  code: string;
  redirect_uri: string;
}

export interface IGetAccessTokenResponse {
  user: IUser;
  token: {
    refresh_token: string;
    access_token: string;
  };
}

export type TAction = ActionType<typeof actions>;
