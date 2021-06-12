import './App.css';
import React, { useState, useEffect } from 'react';
import { items } from '../items';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import Product from './Product';

function Shop() {
  return (
    <div className="shop">
      <div className="products">
        {items.map((item) => {
          return (
            <Link key={item.id} to={`/shop/${item.id}`}>
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
