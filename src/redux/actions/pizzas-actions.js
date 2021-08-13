import { SET_PIZZAS } from "../reducers/pizzas-reducer";

const setPizzas = (items) => ({
  type: SET_PIZZAS,
  payload: items
});

export default setPizzas;
