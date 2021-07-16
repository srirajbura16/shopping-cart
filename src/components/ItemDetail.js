import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
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
    <div className="item-details">
      <h1>{id}</h1>
      {/* {Add image} */}
      <form onSubmit={handleSubmit}>
        <div className="product-img">
          <img src={process.env.PUBLIC_URL + `/assets/${product.img}`} />
        </div>
        <div className="info">
          <h3>{product.title}</h3>
          <div>${product.price}</div>
          <input
            onChange={handleChange}
            type="number"
            max="5"
            min="1"
            placeholder="1"
            className="quant-btn"
          />
          <input className="submit-btn" type="submit" value="Add" />
        </div>
      </form>
    </div>
  );
}
export default ItemDetail;
