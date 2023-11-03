import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  grid: {
    width: '163.75',
    height: '163.75',
  },
  error: null,
};

const gridSlice = createSlice({
  name: 'gird',
  initialState,
  reducers: {
    switchToMidSize(state) {
      state.grid.width = '273';
      state.grid.height = '273';
    },
    switchToSmallSize(state, action) {
      state.grid.width = '163.75';
      state.grid.height = '163.75';
    },
    switchFailure(state, action) {
      state.error = action.payload;
    },
  },
});

export const gridActions = gridSlice.actions;

export default gridSlice.reducer;
