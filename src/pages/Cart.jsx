// Cart.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeFromCart } from '../redux/features/cart/cartSlice';
import { selectTotalCartAmount } from '../redux/features/cart/amountSelactor';
import PaymentComponent from '../compoments/PaymentComponent';
import MainLayout from '../layout/MainLayout';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const totalCartAmount = useSelector(selectTotalCartAmount);
    const dispatch = useDispatch();

    const handleRemove = (itemId) => {
        dispatch(removeFromCart(itemId));
    };

    const handleIncrement = (itemId) => {
        dispatch(incrementQuantity({ itemId, quantity: 1 }));
    };

    const handleDecrement = (itemId) => {
        dispatch(decrementQuantity({ itemId, quantity: -1 }));
    };



    return (
        <MainLayout>
            <h2>Your Cart</h2>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <div>
                                <p>{item.title}</p>
                                <p>Price: ${item.price} * {item.quantity} = {item.totalPrice}</p>
                            </div>
                            <div>
                                <button onClick={() => handleDecrement(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => handleIncrement(item.id)}>+</button>
                                <button onClick={() => handleRemove(item.id)}>Remove</button>
                            </div>
                        </li>
                    ))}

                    <li>
                        <strong>Total Amount: ${totalCartAmount}</strong>
                    </li>

                    <PaymentComponent />
                </ul>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </MainLayout>
    );
};

export default Cart;
