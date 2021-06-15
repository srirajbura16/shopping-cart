import React, { useContext } from 'react';
import './App.css';
import CartItems from './CartItems';
import { ItemsContext } from './ItemsContext';

function Cart(props) {
  const [cartItems, setCartItems] = useContext(ItemsContext);

  function showTotal() {
    let subTotal = 0;
    cartItems.forEach((item) => {
      subTotal += item.price * item.amount;
    });

    const total = (subTotal + subTotal * 0.13).toFixed(2);
    return {
      subTotal,
      total,
    };
  }

  return (
    <div className="Cart">
      <div className="cart-products">
        {cartItems.map((product) => {
          return (
            <CartItems
              title={product.title}
              price={product.price}
              amount={product.amount}
              img={product.img}
              id={product.id}
              key={product.id}
            />
          );
        })}
      </div>
      <hr />
      <div className="total-amount">
        <h1>Subtotal: $ {showTotal().subTotal}</h1>
        <h1>Total: $ {showTotal().total}</h1>
      </div>
    </div>
  );
}

export default Cart;
