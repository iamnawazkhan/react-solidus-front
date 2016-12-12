import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILED,
} from './constants';

export const getProduct = (id) => ({
  type: GET_PRODUCT_REQUEST,
  payload: id,
});

export const productLoaded = (body) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: body,
});

export const productLoadFailed = () => ({
  type: GET_PRODUCT_FAILED,
});
