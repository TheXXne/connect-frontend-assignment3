import * as api from '../../../pages/api/assets';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { assetsActions } from './assetsSlice';

export function* getAssetsSaga() {
  try {
    const data = yield call(api.getAllAssets);
    yield put({ type: 'ASSET_FETCH_SUCCEEDED', assets: assetsActions.emptyReducer(data) });
  } catch (e) {
    yield put({ type: 'ASSET_FETCH_FAILED', message: e.message });
  }
}

export function* getAssetMetadataSaga(action) {
  try {
    const data = yield call(api.getAssetMetadata, action.payload.tokenId);
    yield put({ type: 'METADATA_FETCH_SUCCEEDED', asset: assetsActions.emptyReducer(data) });
  } catch (e) {
    yield put({ type: 'METADATA_FETCH_FAILED', message: e.message });
  }
}

export default function* digitalStampSaga() {
  yield all([takeLatest(assetsActions.emptyReducer.type, getAssetMetadataSaga)]);
}
