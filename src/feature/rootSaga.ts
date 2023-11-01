import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import assetsSaga from './assets/assetsSaga';

function* rootSaga(): SagaIterator {
  yield all([fork(assetsSaga)]);
}

export default rootSaga;
