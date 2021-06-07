import './App.css';
import React, { useState, useEffect } from 'react';
import items from '../items';
import { Link } from 'react-router-dom';
import Product from './Product';

function Shop() {
  // const [products, setProducts] = useState([]);

  // function addToCart() {
  //   //
  // }

  return (
    <div className="Shop">
      <div className="products">
        {items.map((item) => {
          return (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
