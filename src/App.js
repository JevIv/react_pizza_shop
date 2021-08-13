import React from 'react';
import { Header } from './Components/index';
import './scss/app.scss';
import { Home, Cart } from './pages/index';
import { Route } from "react-router-dom";
import axios from "axios";
import setPizzas from "./redux/actions/pizzas-actions";
import { Store as store } from "redux";
import { connect } from "react-redux";


/*
  React.useEffect(() => {
      axios.get('http://localhost:3000/db.json').then(({ data }) => {
        setPizzas(data.pizzas)
      });
    });
*/

class App extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
        this.props.setPizzas(data.pizzas)
      });
  }

  render() {

    return (
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Route path="/" render={() => <Home items={this.props.items}/>} exact/>
          <Route path="/cart" render={Cart} exact/>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items
  };
}

const mapDispatchToProps = {
  setPizzas,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
