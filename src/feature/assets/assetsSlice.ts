import { createSlice } from '@reduxjs/toolkit';

export const assetsSlice = createSlice({
  name: 'assets',
  initialState: [],
  reducers: {
    setAssets: (state, action) => {
      return action.payload;
    },
  },
});

export const assetsActions = assetsSlice.actions;
export default assetsSlice.reducer;
