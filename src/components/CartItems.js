import './App.css';
import React, { useContext, useState } from 'react';
import { ItemsContext } from './ItemsContext';
import Product from './Product';

function CartItems({ title, price, amount }) {
  return (
    <div className="cart-items">
      <div className="cart-item-img"></div>
      <h1>{title}</h1>
      <h1>{price}</h1>
      <h1>Quantity: {amount}</h1>
    </div>
  );
}

export default CartItems;
