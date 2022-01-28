import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export interface IUser {
  nickname: string;
  duplicated: boolean | undefined;
}

export interface IAuthReducer {
  user: IUser;
  authorized: boolean;
  httpResponseStatus: number;
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
  httpResponseStatus: number;
}

export interface IGetNewAccessToken {
  refresh: string;
}

export interface IGetNewAccessTokenResponse {
  access: string;
  expirationTime: number;
}

export interface IEditNickname {
  nickname: string;
}

export type TAction = ActionType<typeof actions>;
