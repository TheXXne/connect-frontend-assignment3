import { put, takeLatest, all } from 'redux-saga/effects';
import { gridActions } from './gridSlice';

function* toMidSize() {
  try {
    yield put(gridActions.switchToMidSize);
  } catch (error) {
    yield put(gridActions.switchFailure(error.message));
  }
}

function* toSmallSize() {
  try {
    yield put(gridActions.switchToSmallSize);
  } catch (error) {
    yield put(gridActions.switchFailure(error.message));
  }
}

export default function* gridSaga() {
  yield all([
    takeLatest(gridActions.switchToMidSize.type, toMidSize),
    takeLatest(gridActions.switchToSmallSize.type, toSmallSize),
  ]);
}
