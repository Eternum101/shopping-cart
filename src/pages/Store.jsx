import React, { useState, useEffect } from "react"
import '../styles/Store.css'

export function Store() {
    const [parts, setParts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setParts(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }

  return (
    <div className="shop-page">
      {parts.map((part) => (
        <div key={part.id} className="part-card">
          <img src={part.image} alt={part.title} />
          <h2>{part.title}</h2>
          <p>Price: ${part.price}</p>
        </div>
      ))}
    </div>
  );
}