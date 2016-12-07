import { createSelector } from 'reselect';

const selectShopState = () => (state) => state.get('shop');

const selectProducts = () => createSelector(
  selectShopState(),
  (shopState) => shopState.get('products')
);

const selectTaxons = () => createSelector(
  selectShopState(),
  (shopState) => shopState.get('taxons'),
);

export {
  selectShopState,
  selectProducts,
  selectTaxons,
};
