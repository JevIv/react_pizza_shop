
export const ADD_PIZZA_CART = 'ADD_PIZZA_CART';
export const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

const initialState = {
  items: {},
  totalPrice: 0,
  itemsCount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_CART : {
      const newItems = {
        ...state.items,
        [action.payload.id]:  // in items create new parametr id
          !state.items[action.payload.id]
            ? [action.payload]
            : [...state.items[action.payload.id],
              action.payload],
      };
      const allPizzas = [].concat.apply([],Object.values(newItems));
      const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0);
      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,// creates a array of all pizzas in cart
        totalPrice,
      };
    }
/*    case SET_TOTAL_COUNT :
      return {
        ...state,
        itemsCount: action.payload, //change itemsCount to new value
      };*/
    default:
      return state;
  }
};

export default cartReducer;
