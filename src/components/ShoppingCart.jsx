import React from "react"
import { useShoppingCart } from "../context/ShoppingCartContext"
import "../styles/ShoppingCart.css"
import { FormatCurrency } from "../utilities/FormatCurrency";
import { FaRegCircleXmark, FaTrashCan } from "react-icons/fa6"

export function ShoppingCart() {
    
const { isOpen, cartItems, closeCart, incrementItem, decrementItem, removeItem } = useShoppingCart();

const handleIncrement = (item) => {
  incrementItem(item.id);
};

const handleDecrement = (item) => {
  decrementItem(item.id);
};

const handleDelete = (itemId) => {
  removeItem(itemId);
}

const subtotal = cartItems.reduce(
  (total, item) => total + item.price * item.quantity, 0
)

    return (
      <>
      {isOpen && (
        <div className="background-overlay"></div>
      )}

      <div className={`shopping-cart-menu ${isOpen ? "open" : ""}`}>
          <div className="cart-content">
            <h2>Shopping Cart</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                  <FaTrashCan/>
                </button>
                <div className="item-image">
                  <img src={item.image} alt={item.title} width="50" height="50" />
                </div>
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p>{FormatCurrency(item.price)}</p>
                <div className="quantity-input">
                  <button
                    className="quantity-btn-cart"
                    onClick={() => handleDecrement(item)}
                  >
                    -
                  </button>
                  <input
                    className="input-quantity-cart"
                    type="number"
                    value={item.quantity}
                    inputMode="numeric"
                  />
                  <button
                    className="quantity-btn-cart"
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>
                </div>
                </div>
              </div>
            ))}
            <div className="total-container">
                <div className="subtotal-container">
                  <h3>Subtotal:</h3>
                  <h2>{FormatCurrency(subtotal)}</h2>
                </div>
                <div className="checkout-container">
                  <button className="checkout-btn">Checkout</button>
                </div>
            </div>
          </div>
          <button className="close-button" onClick={closeCart}>
            <FaRegCircleXmark />
          </button>
        </div>
      </>
    );
  }