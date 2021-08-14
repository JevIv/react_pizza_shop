import { SET_CATEGORY, SET_SORT_BY } from "../reducers/filters-reducer";

const setSortBy = (name) => ({
  type: SET_SORT_BY,
  payload: name

});

const setCategory = (catIndex) => ({
  type: SET_CATEGORY,
  payload: catIndex

});

export {
  setSortBy,
  setCategory,
}