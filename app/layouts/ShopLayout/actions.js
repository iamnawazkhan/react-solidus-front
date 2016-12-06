import {
  GET_TAXONS_REQUEST,
  GET_TAXONS_SUCCESS,
  GET_TAXONS_FAILED,
} from './constants';

export const getTaxons = () => ({
  type: GET_TAXONS_REQUEST,
});

export const taxonsLoaded = (body) => ({
  type: GET_TAXONS_SUCCESS,
  payload: body.taxons,
});

export const taxonsLoadFailed = () => ({
  type: GET_TAXONS_FAILED,
});
