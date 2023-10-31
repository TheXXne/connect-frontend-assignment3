import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';
import { HYDRATE } from 'next-redux-wrapper';

export interface SearchbarState {
  keyword: string;
}

const initialState: SearchbarState = {
  keyword: '',
};

export const searchbarSlice = createSlice({
  name: 'searchbar',
  initialState,
  extraReducers: {
    [HYDRATE]: (_state: SearchbarState, action: PayloadAction<{ searchbar: SearchbarState }>) => {
      return action.payload.searchbar;
    },
  },
  reducers: {
    setSearchbarKeyword: (state: SearchbarState, action: PayloadAction<{ keyword: string }>) => {
      state.keyword = action.payload.keyword;
    },
  },
});

export const selectSearchbarKeyword = (state: RootState) => state.searchbar.keyword;

export const searchbarActions = searchbarSlice.actions;
export default searchbarSlice.reducer;
