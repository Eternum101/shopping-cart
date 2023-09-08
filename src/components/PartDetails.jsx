import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import items from '../data/items.json';
import '../styles/PartDetails.css';
import { FormatCurrency } from '../utilities/FormatCurrency'
import { useShoppingCart } from "../context/ShoppingCartContext";

function PartDetails() {
  const { id } = useParams();
  const [part, setPart] = useState(null);
  const { addItemToCart } = useShoppingCart();

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundPart = items.find((item) => item.id === id);

    if (foundPart) {
      setPart(foundPart);
    } else {
      console.error(`Car part with ID ${id} not found.`);
    }
  }, [id]);

  if (!part) {
    return <div>Loading...</div>;
  }

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  }
  
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const addToCart = () => {
    addItemToCart(part, quantity);
  }

  return (
    <>
    <div className="part-details-container">
      <div className="part-image">
        <img src={part.image} alt={part.title} />
      </div>
      <div className="part-info">
        <h2>{part.title}</h2>
        <p className="part-price">{FormatCurrency(part.price)}</p>
        <p className="part-description">{part.description}</p>
        <p className="part-stock">{part.stock}</p>
        <p className="part-sku">SKU: <span>{part.sku}</span></p>
        <p className="part-category">Category: <span>{part.category}</span></p>
        <div className="quantity-button-container">
          <button className="quantity-btn" onClick={handleDecrement}>
            -
          </button>
          <input className="input-quantity" type="number" 
          value={quantity} inputMode="numeric" 
          onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}>
          </input>
          <button className="quantity-btn" onClick={handleIncrement}>
            +
          </button>
          <button className="add-to-cart-btn" onClick={addToCart}>+ Add to Cart</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default PartDetails;
