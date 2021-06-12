import { Link, useParams, useRouteMatch } from 'react-router-dom';
import React, { useState } from 'react';
import { findProduct } from '../items';

function ItemDetail(props) {
  //cart items -> form submit -> setCartItems(item)

  const [cartItems, setCartItems] = useState([]);
  const [amount, setAmount] = useState(1);

  function handleChange(e) {
    const newAmount = parseInt(e.target.value);
    setAmount(newAmount);
    // console.log(newAmount, amount);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const item = findProduct(id);
    item.amount = amount;
    setCartItems(cartItems.concat(item));
    // console.log(cartItems);
    // console.log(item, amount, cartItems);
    //return to shop page
  }
  let { id } = useParams();
  const product = findProduct(id);
  const log = () => {
    console.log(cartItems);
  };

  return (
    <div>
      {/* {Add image} */}
      <h1>{id}</h1>
      <form onSubmit={handleSubmit}>
        <div>{product.title}</div>
        <div>{product.price}</div>
        <input
          onChange={handleChange}
          type="number"
          max="5"
          min="1"
          placeholder="1"
        />
        <input type="submit" value="Add" />
      </form>
      <button onClick={log}>log</button>
    </div>
  );
}
export default ItemDetail;
