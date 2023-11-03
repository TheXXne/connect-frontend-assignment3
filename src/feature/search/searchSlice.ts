import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  keyword: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchKeyword: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export const selectKeyword = state => state.search.keyword;

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
