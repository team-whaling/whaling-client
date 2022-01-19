import createAsyncThunk from '../../utils';
import api from '../api';
import { getVotes } from './actions';
export const getVotesThunk = createAsyncThunk(getVotes, api.requestGetVotes);
