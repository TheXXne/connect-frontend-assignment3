import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import assetsSaga from './assets/assetsSaga';
import gridSaga from './grid/gridSaga';
import searchSaga from './search/searchSaga';

function* rootSaga(): SagaIterator {
  yield all([fork(assetsSaga), fork(gridSaga), fork(searchSaga)]);
}

export default rootSaga;
