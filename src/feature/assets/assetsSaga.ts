import * as api from '../../../pages/api/assets';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from './assetsSlice';

function* fetchData() {
  try {
    const response = yield call(api.getAllAssets);
    const assets = yield response.assets;
    yield put(fetchDataSuccess(assets));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

function* watchFetchData() {
  yield takeLatest(fetchDataStart, fetchData);
}

export default function* assetsSaga() {
  yield all([watchFetchData()]);
}
