import request from 'utils/request';
import { takeLatest } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { GET_PRODUCT_REQUEST } from './constants';
import { productLoaded, productLoadFailed } from './actions';

export function* getProduct({ payload: id }) {
  try {
    const product = yield call(request, `/api/products/${id}`);
    yield put(productLoaded(product));
  } catch (err) {
    yield put(productLoadFailed(err));
  }
}

export function* getProductWatcher() {
  yield fork(takeLatest, GET_PRODUCT_REQUEST, getProduct);
}

export function* getProductManager() {
  const watcher = yield fork(getProductWatcher);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  getProductManager,
];
