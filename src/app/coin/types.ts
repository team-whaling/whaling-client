import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export interface ICoinList {
  code: string;
  krname: string;
  image: string;
}

export type TAction = ActionType<typeof actions>;
