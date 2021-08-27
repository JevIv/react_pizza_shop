export const ADD_PIZZA_CART = 'ADD_PIZZA_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const PLUS_CART_ITEM = 'PLUS_CART_ITEM';
export const MINUS_CART_ITEM = 'MINUS_CART_ITEM';

const initialState = {
  items: {},
  totalPrice: 0,
  itemsCount: 0,
};

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
}

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};
const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

const cartReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_PIZZA_CART : {
      const currentPizzaItems =
        !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id].items, action.payload];
      const newItems = {
        ...state.items,
        [action.payload.id]:  // in items create new parametr id
          {
            items: currentPizzaItems,
            totalPrice: getTotalPrice(currentPizzaItems),
          },
      };
      //const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0);
      //const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0);

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      //const items = Object.values(newItems).map(obj => obj.items);
      //const allPizzas = [].concat.apply([], items);
      //const totalPrice = getTotalPrice(allPizzas);
      return {
        ...state,
        items: newItems,
        //totalCount: allPizzas.length,// creates a array of all pizzas in cart
        totalCount,
        totalPrice,
      };
    }

    case CLEAR_CART :
      return {
        items: {},
        totalPrice: 0,
        itemsCount: 0,
      };

    case REMOVE_CART_ITEM :
      const newItems = {
        ...state.items
      }
      const currentTotalPrice = newItems[action.payload].totalPrice
      const currentTotalCount = newItems[action.payload].items.length
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,

      }

    case PLUS_CART_ITEM : {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0]
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };
      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case MINUS_CART_ITEM : {
      const oldItems = state.items[action.payload].items;
      const newObjItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };
      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
