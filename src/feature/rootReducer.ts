import { combineReducers } from '@reduxjs/toolkit';
import assetsSlice from './assets/assetsSlice';
import searchSlice from './search/searchSlice';

export const rootReducer = combineReducers({
  assets: assetsSlice,
  search: searchSlice,
});

export default rootReducer;
