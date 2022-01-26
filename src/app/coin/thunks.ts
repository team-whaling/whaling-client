import createAsyncThunk from '../../utils';
import api from '../api';
import { getCoins } from './actions';

export const getCoinsThunk = createAsyncThunk(getCoins, api.requestGetCoins);
