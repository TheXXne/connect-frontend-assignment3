import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import assetsSaga from './assets/assetsSaga';
import gridSaga from './grid/gridSaga';

function* rootSaga(): SagaIterator {
  yield all([fork(assetsSaga), fork(gridSaga)]);
}

export default rootSaga;
