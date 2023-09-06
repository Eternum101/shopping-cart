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
    <div className="part-details-container">
      <div className="part-image">
        <img src={part.image} alt={part.title} />
      </div>
      <div className="part-info">
        <h2>{part.title}</h2>
        <p className="part-price">{FormatCurrency(part.price)}</p>
        <p className="part-description">{part.description}</p>
        <button className="add-to-cart-btn">+ Add to Cart</button>
      </div>
    </div>
  );
}

export default PartDetails;
