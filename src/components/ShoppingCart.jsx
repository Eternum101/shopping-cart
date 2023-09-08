import React from "react"
import { useShoppingCart } from "../context/ShoppingCartContext"
import "../styles/ShoppingCart.css"
import { FormatCurrency } from "../utilities/FormatCurrency";
import { FaRegCircleXmark } from "react-icons/fa6"
export function ShoppingCart() {
    const { isOpen, cartItems, closeCart } = useShoppingCart();

    return (
      <>
        <div className={`shopping-cart-menu ${isOpen ? "open" : ""}`}>
          <div className="cart-content">
            <h2>Shopping Cart</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.title} width="50" height="50" />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{FormatCurrency(item.price)}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="close-button" onClick={closeCart}>
            <FaRegCircleXmark />
          </button>
        </div>
      </>
    );
  }