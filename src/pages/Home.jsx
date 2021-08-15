import React from 'react';
import { Categories, SortPopUp, PizzaBlock, PreLoaderBlock } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/actions/filters-actions";
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

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index)); //save func in first time
  }, []);

  React.useEffect(() => { //first render
    //if (!items.length) {
      dispatch(fetchPizzas());
    //}
  }, []);


  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoryNames}/>
        <SortPopUp items={sortItems}/>
      </div>
      <h2 className="content__title">All</h2>
      <div className="content__items">
        {isLoaded
          ? items.map(obj => <PizzaBlock key={obj.id}
                                         isLoaded={true}
                                         {...obj}/>)//give all props to Component
          : Array(12).fill(<PreLoaderBlock/>)
        }
      </div>
    </div>
  );
}

export default Home;