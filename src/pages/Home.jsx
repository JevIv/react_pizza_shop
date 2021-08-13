import React from 'react';
import { Categories, SortPopUp, PizzaBlock } from "../Components";

function Home({ items }) {

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={(name) => console.log(name)} items={[
          'Meat',
          'Veggie',
          'BBQ',
          'Spicy Hot',
          'Calzone',
        ]}/>
        <SortPopUp items={[
          { name: 'Popularity', type: 'popular' },
          { name: 'Price', type: 'price' },
          { name: 'Name', type: 'name' }]}/>
      </div>
      <h2 className="content__title">All</h2>
      <div className="content__items">
        {
          items.map(obj => <PizzaBlock key={obj.id}
                                       {...obj}/>) //give all props to Component
        }
      </div>
    </div>
  );
}

export default Home;