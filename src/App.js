import React from 'react';
import { Header } from './Components/index';
import './scss/app.scss';
import { Home, Cart } from './pages/index';
import { Route } from "react-router-dom";


function App() {
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
