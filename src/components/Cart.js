import './App.css';
import React, { useContext } from 'react';
import { ItemsContext } from './ItemsContext';
import Product from './Product';

function Cart(props) {
  const [cartItems, setCartItems] = useContext(ItemsContext);
  console.log('jksdhnfjks');
  console.log(cartItems);

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
    </div>
  );
}

export default Cart;
