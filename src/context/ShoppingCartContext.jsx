import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext({})

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider( { children } ) {

    const [cartItems, setCartItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);


    const addItemToCart = (item, quantity) => {
      const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  
      if (existingItem) {
        setCartItems((prevCartItems) =>
          prevCartItems.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
          )
        );
      } else {
        setCartItems((prevCartItems) => [
          ...prevCartItems,
          { ...item, quantity },
        ]);
      }
  };  

    const incrementItem = (itemId) => {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
     );
    };

    const decrementItem = (itemId) => {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === itemId && cartItem.quantity > 1
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    };

    const removeItem = (itemId) => {
      setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.id !== itemId)
      );
    }
    
      const cartQuantity = cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
      );

      const openCart = () => setIsOpen(true);
      const closeCart = () => setIsOpen(false);

    return (
    <>
    <ShoppingCartContext.Provider value={{cartItems, addItemToCart, cartQuantity, openCart, closeCart, isOpen, incrementItem, decrementItem, removeItem}}>
        {children}
    </ShoppingCartContext.Provider>
    </>
    )
};