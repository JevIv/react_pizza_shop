import { ADD_PIZZA_CART } from "../reducers/cart-reducer";

const addPizzaToCart = (pizza) => ({
  type: ADD_PIZZA_CART,
  payload: pizza,

});

export {
  addPizzaToCart,
}