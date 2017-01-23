import { createSelector } from 'reselect';

const selectCartState = () => (state) => state.get('cart');

const selectCartItems = () => createSelector(
  selectCartState(),
  (cartState) => cartState.get('cart'),
);

export {
  selectCartState,
  selectCartItems,
};
