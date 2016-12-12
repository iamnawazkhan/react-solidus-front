import request from 'utils/request';
import { takeLatest } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { GET_PRODUCTS_REQUEST, GET_TAXON_PRODUCTS_REQUEST } from './constants';
import { taxonsLoaded, taxonsLoadFailed, GET_TAXONS_REQUEST } from 'reducers/taxons';
import { productsLoaded, productsLoadFailed, taxonProductsLoaded, taxonProductsLoadFailed } from './actions';

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
  getTaxonsManager,
  getProductsManager,
  getTaxonProductsManager,
];
