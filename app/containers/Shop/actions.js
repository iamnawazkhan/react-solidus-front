import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILED,
  GET_TAXON_PRODUCTS_REQUEST,
  GET_TAXON_PRODUCTS_FAILED,
  GET_TAXON_PRODUCTS_SUCCESS,
} from './constants';

export const getTaxonProducts = (id) => ({
  type: GET_TAXON_PRODUCTS_REQUEST,
  id,
});

export const taxonProductsLoaded = (body) => ({
  type: GET_TAXON_PRODUCTS_SUCCESS,
  payload: body.products,
});

export const taxonProductsLoadFailed = () => ({
  type: GET_TAXON_PRODUCTS_FAILED,
});

export const getProducts = () => ({
  type: GET_PRODUCTS_REQUEST,
});

export const productsLoaded = (body) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: body.products,
});

export const productsLoadFailed = () => ({
  type: GET_PRODUCTS_FAILED,
});
