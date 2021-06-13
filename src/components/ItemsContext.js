import { createContext, useState } from 'react';

export const ItemsContext = createContext();

export const ItemsProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <ItemsContext.Provider value={[cartItems, setCartItems]}>
      {props.children}
    </ItemsContext.Provider>
  );
};
