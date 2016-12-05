import {
  GET_TAXONOMIES_REQUEST,
  GET_TAXONOMIES_SUCCESS,
  GET_TAXONOMIES_FAILED,
} from './constants';

export const getTaxonomies = () => ({
  type: GET_TAXONOMIES_REQUEST,
});

export const taxonomiesLoaded = (body) => ({
  type: GET_TAXONOMIES_SUCCESS,
  payload: body.taxonomies,
});

export const taxonomiesLoadFailed = () => ({
  type: GET_TAXONOMIES_FAILED,
});
