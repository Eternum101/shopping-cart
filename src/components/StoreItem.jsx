import React, { useState, useEffect } from "react"
import items from '../data/items.json'
import { FormatCurrency } from "../utilities/FormatCurrency";
import '../styles/Store.css'

export function StoreItem() {
    const [parts, setParts] = useState([]);
    const [loading, setLoading] = useState(false); // Set initial loading state to false
    const [error, setError] = useState(null);
  
    useEffect(() => {
      setParts(items);
      setLoading(false);
    }, []);
    
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
          <div key={part.id} className="part-card">
            <img src={part.image} alt={part.title} />
            <h2>{part.title}</h2>
            <p>Price: {FormatCurrency (part.price)}</p>
            <div className="add-container">
              <button className="add-btn">+ Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      </>
    );
}