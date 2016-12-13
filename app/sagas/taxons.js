import request from 'utils/request';
import { takeLatest } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { taxonsLoaded, taxonsLoadFailed, GET_TAXONS_REQUEST } from 'reducers/taxons';

export function* getTaxons() {
  try {
    const taxons = yield call(request, '/api/taxons');
    yield put(taxonsLoaded(taxons));
  } catch (err) {
    yield put(taxonsLoadFailed(err));
  }
}

export function* getTaxonsWatcher() {
  yield fork(takeLatest, GET_TAXONS_REQUEST, getTaxons);
}

export function* getTaxonsManager() {
  const watcher = yield fork(getTaxonsWatcher);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  getTaxonsManager,
];
