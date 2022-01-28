import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface ILoadingReducer {
  gettingToken: boolean;
  checkigToken: boolean;
}

export type TAction = ActionType<typeof actions>;
