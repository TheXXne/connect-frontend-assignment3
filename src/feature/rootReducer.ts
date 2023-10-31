import { combineReducers } from '@reduxjs/toolkit';
import assetsSlice from './assets/assetsSlice';

export const rootReducer = combineReducers({
  assets: assetsSlice,
});

export default rootReducer;
