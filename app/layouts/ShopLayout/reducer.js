import { fromJS } from 'immutable';
import {
  GET_TAXONOMIES_SUCCESS,
} from './constants';

function shopReducer(state = fromJS({}), { type, payload }) {
  switch (type) {
    case GET_TAXONOMIES_SUCCESS:
      return state
        .set('taxonomies', payload);
    default:
      return state;
  }
}

export default shopReducer;
