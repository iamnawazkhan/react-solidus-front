import { fromJS } from 'immutable';

export const GET_TAXONS_REQUEST = 'GET_TAXONS_REQUEST';
export const GET_TAXONS_SUCCESS = 'GET_TAXONS_SUCCESS';
export const GET_TAXONS_FAILED = 'GET_TAXONS_FAILED';

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

function taxonReducer(state = fromJS({}), { type, payload }) {
  switch (type) {
    case GET_TAXONS_SUCCESS:
      return state
        .set('taxons', payload);
    default:
      return state;
  }
}

export default taxonReducer;
