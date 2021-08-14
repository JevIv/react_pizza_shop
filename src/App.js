import React from 'react';
import { Header } from './Components/index';
import './scss/app.scss';
import { Home, Cart } from './pages/index';
import { Route } from "react-router-dom";
import axios from "axios";
import setPizzas from "./redux/actions/pizzas-actions";
import { useDispatch } from "react-redux";


function App() {

  const dispatch = useDispatch();

  React.useEffect(() =>{ //first render
    axios.get('http://localhost:3001/pizzas?_order=desc&_sort=price').then(({ data }) => {
      dispatch(setPizzas(data));
    });
  },[]);

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route path="/" component={Home} exact/>
        <Route path="/cart" component={Cart} exact/>
      </div>
    </div>
  );
}

export default App;