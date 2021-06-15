import React, { useContext } from 'react';
import './App.css';
import { ItemsContext } from './ItemsContext';
function CartItems({ title, price, amount, img, id }) {
  const [cartItems, setCartItems] = useContext(ItemsContext);

  function deleteItem(e) {
    const id = e.target.className;
    const newCartItems = cartItems.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    setCartItems(newCartItems);
  }

  return (
    <div className="cart-items">
      <hr />
      <div className="cart-item-img">
        <img src={window.location.origin + `/assets/${img}`} />
      </div>
      <div className="details">
        <div className="info">
          <div>{title}</div>
          <div>${price}</div>
          <div>Quantity: {amount}</div>
        </div>
        <button className={id} onClick={deleteItem}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default CartItems;
