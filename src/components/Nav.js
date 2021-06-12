import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
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
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
