// src/CheckoutForm.js
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './CheckoutForm.css'; // CSS fayli

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [amount, setAmount] = useState(''); // To'lov summasi uchun state

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      // Serverga to'lovni yuborish
      const response = await fetch('/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          amount: amount * 100 // Muvaffaqiyatli kelishi uchun sentlarga o'zgartiramiz
        }),
      });

      const paymentResult = await response.json();

      if (paymentResult.error) {
        setError(paymentResult.error);
        setLoading(false);
      } else {
        setSuccess(true);
        setLoading(false);
      }
    }
  };

  return (
    <div className="checkout-form">
      {success ? (
        <div className="success-message">Sucessfully</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="amount" className='amount10'>Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <CardElement />
          <button type="submit"  className="sab" disabled={!stripe || loading}>
            {loading ? 'Loading...' : 'checkout'}
          </button>
          {error && <div className="error-message">{error}</div>}
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
