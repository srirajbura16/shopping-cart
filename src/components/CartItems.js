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
    <tr className="cart-items">
      {/* <td>{IMG and DESCRIPTION}</td> */}
      <td>
        <div className="cart-item-img">
          <img src={process.env.PUBLIC_URL + `/assets/${img}`} />
        </div>
      </td>
      <td>
        <div>{id}</div>
      </td>
      <td>
        <div>{amount}</div>
      </td>
      <td>
        <div>{price}</div>
      </td>
    </tr>
  );
}

export default CartItems;
