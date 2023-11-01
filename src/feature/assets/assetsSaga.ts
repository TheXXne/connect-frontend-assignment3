import * as api from '../../../pages/api/assets';
import { call, put, takeLatest } from 'redux-saga/effects';
import { assetsActions } from './assetsSlice';

function* fetchAssets() {
  try {
    const assets = yield call(api.getAllAssets);
    yield put(assetsActions.setAssets(assets));
  } catch (error) {
    console.log('fetchItems - error : ', error);
  }
}

function* assetsSaga() {
  yield takeLatest('assets/fetchAssets', fetchAssets);
}

export default assetsSaga;
