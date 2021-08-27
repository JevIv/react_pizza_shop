import {
  ADD_PIZZA_CART,
  CLEAR_CART,
  MINUS_CART_ITEM,
  PLUS_CART_ITEM,
  REMOVE_CART_ITEM
} from "../reducers/cart-reducer";

const addPizzaToCart = (pizza) => ({
  type: ADD_PIZZA_CART,
  payload: pizza,
});

const clearCart = () => ({
  type: CLEAR_CART
});

const removeCartItem = (id) => ({
  type: REMOVE_CART_ITEM,
  payload: id,
});

const plusCartItem = (id) => ({
  type: PLUS_CART_ITEM,
  payload: id,
});

const minusCartItem = (id) => ({
  type: MINUS_CART_ITEM,
  payload: id,
});

export {
  addPizzaToCart,
  clearCart,
  removeCartItem,
  plusCartItem,
  minusCartItem
}