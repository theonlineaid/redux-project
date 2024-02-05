// PaymentComponent.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

const PaymentComponent = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handlePayment = () => {
    // ... your payment logic, e.g., calling an API, processing payment, etc.

    // Assuming the payment is successful, clear the cart
    dispatch(clearCart());
    alert('Payment successful! Cart cleared.');
    navigate("/payment");// Adjust the path accordingly
  };

  return (
    <div>
      {/* ... your payment form or button */}
      <button onClick={handlePayment}>Proceed to Payment</button>
    </div>
  );
};

export default PaymentComponent;
