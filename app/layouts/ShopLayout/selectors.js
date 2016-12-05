import { createSelector } from 'reselect';
/*
const selectProductsState = () => (state) => state.get('products');

const selectProducts = () => createSelector(
  selectProductsState(),
  (productsState) => productsState.get('products')
);
*/
const selectTaxonomiesState = () => (state) => state.get('taxonomies');

const selectTaxonomies = () => createSelector(
  selectTaxonomiesState(),
  (taxonomiesState) => taxonomiesState.get('taxonomies'),
);

export {
  // selectProductsState,
  // selectProducts,
  selectTaxonomiesState,
  selectTaxonomies,
};
