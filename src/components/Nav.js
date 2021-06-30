import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { ItemsContext } from './ItemsContext';
function Nav() {
  const [cartItems, setCartItems] = useContext(ItemsContext);
  const linkStyles = { textDecoration: 'none', color: 'black' };
  return (
    <nav>
      <Link to="/" style={linkStyles}>
        <h1>
          Worths
          <br />
          Hunting Store
        </h1>
      </Link>
      <ul className="nav-links">
        <Link to="/shop" style={linkStyles}>
          <li>SHOP</li>
        </Link>
        <Link to="/cart" style={linkStyles}>
          <li>
            CART <span>{cartItems.length > 0 && cartItems.length}</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
