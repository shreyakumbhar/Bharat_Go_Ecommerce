
import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedId, setSelectedId] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);

  const addToCart = (id) => {
    setSelectedId(prev => [...prev, id]); 
 
  };

  return (
    <ProductContext.Provider value={{ selectedId,setSelectedId,  addToCart,cartItems,setCartItems, grandTotal, setGrandTotal}}>
      {children}
    </ProductContext.Provider>
  );
};
