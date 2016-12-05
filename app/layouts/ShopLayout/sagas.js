import request from 'utils/request';
import { takeLatest } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { GET_TAXONOMIES_REQUEST } from './constants';
import { taxonomiesLoaded, taxonomiesLoadFailed } from './actions';

export function* getTaxonomies() {
  try {
    const taxonomies = yield call(request, '/api/taxonomies');
    yield put(taxonomiesLoaded(taxonomies));
  } catch (err) {
    yield put(taxonomiesLoadFailed(err));
  }
}

export function* getTaxonomiesWatcher() {
  yield fork(takeLatest, GET_TAXONOMIES_REQUEST, getTaxonomies);
}

export function* getTaxonomiesManager() {
  const watcher = yield fork(getTaxonomiesWatcher);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  getTaxonomiesManager,
];
