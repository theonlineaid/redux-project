import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext';

export default function Card({name, price}) {
  const { addToCard } = useContext(CartContext);

  const cardStyle = {
    // Add your styles here
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    textAlign: 'center',
    cursor: 'pointer',
  };

    return (
        <div style={cardStyle}  onClick={() => addToCard(name, price)}>
            <img src={`https://placekitten.com/200/200`} alt={name} />
            <h3>{name}</h3>
            <strong>${price.toFixed(2)}</strong>
            {/* <button onClick={handleAddToCart}>Add to Cart</button> */}
        </div>
    )
}
 