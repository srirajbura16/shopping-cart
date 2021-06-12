import './App.css';
import { Link } from 'react-router-dom';
import Product from './Product';

function Cart(props) {
  const { products } = props;

  return (
    <div className="Cart">
      {/* <div className="cart-products">
        {products.map((product) => {
          return (
            <Product
              title={product.title}
              price={product.price}
              img={product.img}
              key={product.id}
            />
          );
        })}
      </div> */}
      hihihi
    </div>
  );
}

export default Cart;
