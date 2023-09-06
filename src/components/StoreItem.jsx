import React, { useState, useEffect } from "react";
import { FormatCurrency } from "../utilities/FormatCurrency";
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import '../styles/Store.css';
import items from '../data/items.json'

export function StoreItem() {
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate to enable programmatic navigation

  useEffect(() => {
    setParts(items);
    setLoading(false);
  }, []);

  const handlePartClick = (part) => {
    navigate(`/store/${part.id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="image-part-container">
        <div className='text-container'>
          <h2>PARTS<span>.</span></h2>
        </div>
      </div>
      <div className="shop-page">
        {parts.map((part) => (
          <div
            key={part.id}
            className="part-card"
            onClick={() => handlePartClick(part)}
          >
            {/* Use Link to navigate to the part details route */}
            <Link to={`/store/${part.id}`} className="part-link">
              <img src={part.image} alt={part.title} />
              <h2>{part.title}</h2>
              <p>Price: {FormatCurrency(part.price)}</p>
            </Link>
            <div className="add-container">
              <button className="add-btn">+ Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
