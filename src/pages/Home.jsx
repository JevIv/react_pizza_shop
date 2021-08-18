import React from 'react';
import { Categories, SortPopUp, PizzaBlock, PreLoaderBlock } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters-actions";
import { fetchPizzas } from "../redux/actions/pizzas-actions";


const categoryNames = ['Meat', 'Veggie', 'BBQ', 'Spicy Hot', 'Calzone'];
const sortItems = [
  { name: 'Popularity', type: 'popular' },
  { name: 'Price', type: 'price' },
  { name: 'Name', type: 'name' }];


function Home() {

  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index)); //save func in first time
  }, [sortBy, category]);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type)); //save func in first time
  }, [sortBy, category]);

  React.useEffect(() => { //first render
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);


  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames}
        />
        <SortPopUp activeSortType={sortBy.type}
                   items={sortItems}
                   onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {isLoaded
          ? items.map(obj => <PizzaBlock key={obj.id}
                                         isLoaded={true}
                                         {...obj}/>)//give all props to Component
          : Array(12)
            .fill(0)
            .map((_, index) => <PreLoaderBlock key={index}/>)
        }
      </div>
    </div>
  );
}

export default Home;