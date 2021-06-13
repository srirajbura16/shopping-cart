import './App.css';
import React, { useContext } from 'react';
import { ItemsContext } from './ItemsContext';
import { items } from '../items';
import { Link } from 'react-router-dom';
import Product from './Product';

function Shop() {
  const [cartItems, setCartItems] = useContext(ItemsContext);

  return (
    <div className="shop">
      <div className="products">
        {items.map((item) => {
          return (
            <Link key={item.id} to={`/shop/${item.id}`}>
              <Product
                key={item.id}
                id={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
