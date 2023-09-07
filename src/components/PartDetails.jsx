import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import items from '../data/items.json';
import '../styles/PartDetails.css';
import { FormatCurrency } from '../utilities/FormatCurrency'

function PartDetails() {
  const { id } = useParams();
  const [part, setPart] = useState(null);

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
          <button className="quantity-btn">
            -
          </button>
          <input className="input-quantity" type="number" value="1" inputMode="numeric"></input>
          <button className="quantity-btn">
            +
          </button>
          <button className="add-to-cart-btn">+ Add to Cart</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default PartDetails;
