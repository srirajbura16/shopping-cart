import './App.css';
import React, { useContext, useState } from 'react';
import { ItemsContext } from './ItemsContext';
import Product from './Product';

function Cart(props) {
  const [cartItems, setCartItems] = useContext(ItemsContext);

  function showTotal() {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.amount;
    });
    return total;
  }

  return (
    <div className="Cart">
      <div className="cart-products">
        {cartItems.map((product) => {
          console.log(cartItems);
          return (
            <Product
              title={product.title}
              price={product.price}
              key={product.id}
            />
          );
        })}
      </div>
      <hr />
      <div>$ {showTotal()}</div>
    </div>
  );
}

export default Cart;
