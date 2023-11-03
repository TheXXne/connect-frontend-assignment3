import { combineReducers } from '@reduxjs/toolkit';
import assetsSlice from './assets/assetsSlice';
import gridSlice from './grid/gridSlice';
import searchSlice from './search/searchSlice';

export const rootReducer = combineReducers({
  assets: assetsSlice,
  grid: gridSlice,
  search: searchSlice,
});

export default rootReducer;
