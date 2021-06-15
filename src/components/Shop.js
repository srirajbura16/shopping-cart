import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { items } from '../items';
import './App.css';
import { ItemsContext } from './ItemsContext';
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
                key={item.id}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
