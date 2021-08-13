
export const SET_PIZZAS = 'SET_PIZZAS';

const initialState = {
  items: [],
  isLoaded: false,

};

const pizzasReducer = (state = initialState, action) => {
  if (action.type === SET_PIZZAS){
    return {
      ...state,
      items: action.payload, //change items to new value
      isLoaded: true
    };
  }
  return state;
};

export default pizzasReducer;
