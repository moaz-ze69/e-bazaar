import React, { createContext, useState } from "react";

export let cartContext = createContext({});

export default function CartProvider({ children }) {
  let [cartItems, setCartItems] = useState([]);
  let [recentOrderedItems, setRecentOrderedItems] = useState([]);

  return (
    <cartContext.Provider
      value={{
        cartItems,
        setCartItems,
        recentOrderedItems,
        setRecentOrderedItems,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
