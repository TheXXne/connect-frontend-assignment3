import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { NFT } from '@thirdweb-dev/sdk';
import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from '../rootReducer';

export interface AssetsState {
  assets: NFT[];
}

const initialState: AssetsState = {
  assets: [],
};

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  await axios
    .get('http://localhost:3000/api/assets')
    .then((res: AxiosResponse) => ({
      assets: res.data.assets,
    }))
    .catch(error => ({ error }));
});

export const assetsSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    emptyReducer: (state, action) => {},
  },
  extraReducers: {
    [HYDRATE]: (_state: AssetsState, action: PayloadAction<{ assets: AssetsState }>) => {
      return action.payload.assets;
    },
  },
});

export const selectLikeList = (state: RootState) => state.assets;

export const assetsActions = assetsSlice.actions;

export default assetsSlice.reducer;
