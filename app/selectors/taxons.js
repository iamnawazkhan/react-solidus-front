import { createSelector } from 'reselect';

const selectTaxonsState = () => (state) => state.get('taxons');

const selectTaxons = () => createSelector(
  selectTaxonsState(),
  (taxonsState) => taxonsState.get('taxons'),
);

export {
  selectTaxonsState,
  selectTaxons,
};
