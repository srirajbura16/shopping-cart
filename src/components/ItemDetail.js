import { Link, useParams } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { findProduct } from '../items';
import { ItemsContext } from './ItemsContext';

function ItemDetail(props) {
  const [cartItems, setCartItems] = useContext(ItemsContext);
  const [amount, setAmount] = useState(1);

  function handleChange(e) {
    const newAmount = parseInt(e.target.value);
    setAmount(newAmount);
    console.log(amount, cartItems);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const item = findProduct(id);
    item.amount = amount;
    // if(cartItems.includes(item)){
    //   //add item amount to existing item amount

    // }
    setCartItems(cartItems.concat(item));
    setAmount(1);
  }

  let { id } = useParams();
  const product = findProduct(id);

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
        {/* <Link to="/shop"> */}
        <input type="submit" value="Add" />
        {/* </Link> */}
      </form>
    </div>
  );
}
export default ItemDetail;
