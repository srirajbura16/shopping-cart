import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">
      <h1>Worths General Store</h1>
      <div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/Shop">Shop</Link>
        </div>
        <div>
          <Link to="/Cart">Cart</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
