import { combineReducers } from "redux";
import filtersReducer from "./filters-reducer";
import pizzasReducer from "./pizzas-reducer";
import cartReducer from "./cart-reducer";


const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
  cart: cartReducer,
})

export default rootReducer;