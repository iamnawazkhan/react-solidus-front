import { createSelector } from 'reselect';
/*
const selectProductsState = () => (state) => state.get('products');

const selectProducts = () => createSelector(
  selectProductsState(),
  (productsState) => productsState.get('products')
);
*/
const selectTaxonsState = () => (state) => state.get('taxons');

const selectTaxons = () => createSelector(
  selectTaxonsState(),
  (taxonsState) => taxonsState.get('taxons'),
);

export {
  // selectProductsState,
  // selectProducts,
  selectTaxonsState,
  selectTaxons,
};
