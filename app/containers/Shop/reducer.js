import { fromJS } from 'immutable';
import {
  GET_TAXONS_SUCCESS,
  GET_TAXON_PRODUCTS_SUCCESS,
  GET_PRODUCTS_SUCCESS,
} from './constants';

function shopReducer(state = fromJS({}), { type, payload }) {
  switch (type) {
    case GET_TAXONS_SUCCESS:
      return state
        .set('taxons', payload);
    case GET_TAXON_PRODUCTS_SUCCESS:
    case GET_PRODUCTS_SUCCESS:
      return state
        .set('products', payload);
    default:
      return state;
  }
}

export default shopReducer;
