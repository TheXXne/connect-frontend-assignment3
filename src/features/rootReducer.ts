import { combineReducers } from '@reduxjs/toolkit';
import assetsSlice, { AssetsState } from './assets/assetsSlice';
import searchbarSlice, { SearchbarState } from './searchbar/searchbarSlice';

export const rootReducer = combineReducers({
  searchbar: searchbarSlice,
  assets: assetsSlice,
});

export interface RootState {
  searchbar: SearchbarState;
  assets: AssetsState;
}

export default rootReducer;
