import { fromJS } from 'immutable';
import {
  GET_PRODUCT_SUCCESS,
} from './constants';

function shopReducer(state = fromJS({}), { type, payload }) {
  switch (type) {
    case GET_PRODUCT_SUCCESS:
      return state
        .set('product', payload);
    default:
      return state;
  }
}

export default shopReducer;
