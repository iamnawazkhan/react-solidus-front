import { fromJS } from 'immutable';
import {
  GET_TAXONS_SUCCESS,
} from './constants';

function shopReducer(state = fromJS({}), { type, payload }) {
  switch (type) {
    case GET_TAXONS_SUCCESS:
      return state
        .set('taxons', payload);
    default:
      return state;
  }
}

export default shopReducer;
