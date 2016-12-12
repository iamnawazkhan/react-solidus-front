import { createSelector } from 'reselect';

const selectProductState = () => (state) => state.get('product');

const selectProduct = () => createSelector(
  selectProductState(),
  (productState) => productState.get('product')
);

export {
  selectProductState,
  selectProduct,
};
