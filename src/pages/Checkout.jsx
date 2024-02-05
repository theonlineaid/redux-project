import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';

export default function Checkout() {
  const { items } = useContext(CartContext);
  const [discount, setDiscount] = useState(null); // Initially, no default discount
  const [discountInput, setDiscountInput] = useState('');

  const handleDiscountInputChange = (event) => {
    setDiscountInput(event.target.value);
  };

  const handleApplyDiscount = () => {
    const parsedDiscount = parseFloat(discountInput);
    if (!isNaN(parsedDiscount) && parsedDiscount >= 0 && parsedDiscount <= 1) {
      setDiscount(parsedDiscount);
    } else {
      alert('Please enter a valid discount between 0 and 1.');
    }
  };

  // let string = '40'
  // console.log(24, parseFloat(string), typeof(string))

  return (
    <div>
      <h2>Checkout</h2>
      {items.length === 0 ? (
        <p>Your cart is empty. Add some items before checking out.</p>
      ) : (
        <>
          <p>Items in your cart:</p>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <label>
            Discount:
            <input
              type="text"
              value={discountInput}
              onChange={handleDiscountInputChange}
            />
          </label>
          <button onClick={handleApplyDiscount}>Apply Discount</button>
          <p>Total: ${calculateTotal(items, discount).toFixed(2)}</p>
          <button onClick={() => handleCheckout(items, discount)}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

function calculateTotal(items, discount) {
  const total = items.reduce((total, item) => total + item.price, 0);
  return discount !== null ? total - total * discount : total;
}

function handleCheckout(items, discount) {
  // Implement the checkout logic here
  console.log('Checkout logic goes here:', items);
  // Apply the discount before proceeding with checkout
  const discountedTotal = calculateTotal(items, discount);
  console.log('Discounted Total:', discountedTotal);
  // Clear the cart or perform any other necessary actions
}
