import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  keyword: string;
}

const initialState: SearchState = {
  keyword: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchKeyword: (state: SearchState, action: PayloadAction<{ keyword: string }>) => {
      state.keyword = action.payload.keyword;
    },
  },
});

export const setSearchKeyword = searchSlice.actions;
export default searchSlice.reducer;
