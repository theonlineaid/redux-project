import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function PaymentSuccess() {

    const navigate = useNavigate();

    const GoToHome = () => {
        navigate("/");// Adjust the path accordingly
    };


    return (
        <div style={{textAlign: 'center'}}>
            <h2>PaymentSuccess</h2>
            <p style={{cursor: 'pointer'}} onClick={GoToHome}>Go to home page</p>
        </div>
    )
}
