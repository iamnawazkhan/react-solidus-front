import request from 'utils/request';
import { takeLatest } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { GET_PRODUCTS_REQUEST, GET_TAXON_PRODUCTS_REQUEST } from './constants';
import { productsLoaded, productsLoadFailed, taxonProductsLoaded, taxonProductsLoadFailed } from './actions';

export function* getProducts() {
  try {
    const products = yield call(request, '/api/products');
    yield put(productsLoaded(products));
  } catch (err) {
    yield put(productsLoadFailed(err));
  }
}

export function* getProductsWatcher() {
  yield fork(takeLatest, GET_PRODUCTS_REQUEST, getProducts);
}

export function* getProductsManager() {
  const watcher = yield fork(getProductsWatcher);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* getTaxonProducts(action) {
  try {
    const products = yield call(request, `/api/taxons/products?id=${action.id}`);
    yield put(taxonProductsLoaded(products));
  } catch (err) {
    yield put(taxonProductsLoadFailed(err));
  }
}

export function* getTaxonProductsWatcher() {
  yield fork(takeLatest, GET_TAXON_PRODUCTS_REQUEST, getTaxonProducts);
}

export function* getTaxonProductsManager() {
  const watcher = yield fork(getTaxonProductsWatcher);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  getProductsManager,
  getTaxonProductsManager,
];
