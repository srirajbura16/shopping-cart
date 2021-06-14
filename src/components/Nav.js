import './App.css';
import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { ItemsContext } from './ItemsContext';
function Nav() {
  const [cartItems, setCartItems] = useContext(ItemsContext);

  return (
    <nav>
      <h1>Worths General Store</h1>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/cart">
          <li>
            Cart <span>{cartItems.length}</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
