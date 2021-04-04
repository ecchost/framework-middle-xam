import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import About from "./components/About";
import Home from "./components/Home";
import Error from "./components/Error";
import Footer from "./components/Footer";
// import Product from "./components/home/Product";
// import Checkout from "./components/home/Checkout";

import CheckoutNew from "./components/home/CheckoutNew";

import Product from "./components/container/ProductPost.js";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation/>
        <br></br><br></br><br></br><br></br><br></br>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/" component={Product} exact />
          <Route path="/about" component={About} />
          <Route path="/checkout" component={CheckoutNew} />
          <Route component={Error} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
