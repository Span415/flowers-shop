import React from 'react';
import {
  Route,
  withRouter,
} from "react-router-dom"

import Home from './components/home/Home'
import Header from './components/header/Header'
import Shop from './components/shop/Shop'
import Gallery from './components/gallery/Gallery'
import Cart from './components/cart/Cart'

function App() {
  return (
    <div className="general-wrapper">
      <React.StrictMode>
          <Header />
          <Route path="/" component={Home} exact />
          <Route path='/home' component={Home} exact />
          <Route path='/shop' component={Shop} exact />
          <Route path='/gallery' component={Gallery} exact />
          <Route path='/cart' component={Cart} exact />
          {/* <Route component={NotFound} /> */}
      </React.StrictMode>
    </div>
  );
}

export default withRouter(App);
