import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assets: [],
  loading: false,
  error: null,
};

const assetsSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action) {
      state.loading = false;
      state.assets = action.payload;
    },
    fetchDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = assetsSlice.actions;

export default assetsSlice.reducer;
