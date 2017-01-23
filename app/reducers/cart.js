import { fromJS } from 'immutable';
import unionBy from 'lodash/unionBy';
import cookie from 'react-cookie';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const LOAD_CART = 'LOAD_CART';
export const CLEAR_CART = 'CLEAR_CART';

export const addToCart = (cartItem) => ({
  type: ADD_TO_CART,
  payload: cartItem,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const loadCart = () => ({
  type: LOAD_CART,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

function cartReducer(state = fromJS({}), { type, payload }) {
  let newCart;

  switch (type) {
    case ADD_TO_CART:
      newCart = unionBy([payload], state.get('cart'), (elem) => elem.variant_id);
      cookie.save('cart', newCart, { path: '/' });
      return state
        .set('cart', newCart);
    case REMOVE_FROM_CART:
      newCart = state.get('cart').filter((elem) => elem.product_id !== payload);
      cookie.save('cart', newCart, { path: '/' });
      return state
        .set('cart', newCart);
    case LOAD_CART:
      newCart = cookie.load('cart');
      return state
        .set('cart', newCart);
    case CLEAR_CART:
      cookie.remove('cart', { path: '/' });
      return state
        .set('cart', undefined);
    default:
      return state;
  }
}

export default cartReducer;
