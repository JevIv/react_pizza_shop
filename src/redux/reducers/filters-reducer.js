
export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_CATEGORY = 'SET_CATEGORY';

const initialState = {
  sortBy: 'popular',
  category: 0,

};

const filtersReducer = (state = initialState, action) => {
  if (action.type === SET_SORT_BY){
    return {
      ...state,
      sortBy: action.payload //change sortBy to new value
    };
  }
  if (action.type === SET_CATEGORY){
    return {
      ...state,
      category: action.payload //change sortBy to new value
    };
  }

  return state;
};

export default filtersReducer;
