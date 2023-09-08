import { createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";

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
              cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
            )
          );
        } else {
          setCartItems((prevCartItems) => [
            ...prevCartItems,
            { ...item, quantity },
          ]);
        }
      };
    
      const cartQuantity = cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
      );

      const openCart = () => setIsOpen(true);
      const closeCart = () => setIsOpen(false);

    return (
    <>
    <ShoppingCartContext.Provider value={{cartItems, addItemToCart, cartQuantity, openCart, closeCart, isOpen}}>
        {children}
    </ShoppingCartContext.Provider>
    </>
    )
};