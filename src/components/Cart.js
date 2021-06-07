import './App.css';
import { Link } from 'react-router-dom';

function Cart(props) {
  const { products } = props;

  return (
    <div className="Cart">
      <div className=""></div>
      TAKES IN ARRAY OF PRODUCTS AND RENDERS THEM ALONG WITH TOTAL PRICE, MAYBE
      DATE
    </div>
  );
}

export default Cart;
