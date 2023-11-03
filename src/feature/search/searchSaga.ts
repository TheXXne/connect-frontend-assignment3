import { put, takeLatest, all } from 'redux-saga/effects';
import { searchActions } from './searchSlice';

function* setKeyword() {
  yield put(searchActions.setSearchKeyword);
}

export default function* gridSaga() {
  yield all([takeLatest(searchActions.setSearchKeyword.type, setKeyword)]);
}
