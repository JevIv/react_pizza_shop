
export const SET_PIZZAS = 'SET_PIZZAS';
export const SET_LOADED = 'SET_LOADED';

const initialState = {
  items: [],
  isLoaded: false,

};

const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZAS :
      return {
        ...state,
        items: action.payload, //change items to new value
        isLoaded: true
      };
    case SET_LOADED :
      return {
        ...state,
        isLoaded: action.payload, //change isLoaded to new value
      };
    default:
      return state;
  }
};

export default pizzasReducer;
