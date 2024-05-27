// src/PaymentForm.js

import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import styled from 'styled-components';

const PaymentFormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const StyledButton = styled.button`
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState('');
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      const { id } = paymentMethod;

      const response = await fetch('/pay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: id, amount: amount * 100 }), // Convert amount to cents
      });

      const data = await response.json();
      setPaymentSuccess(data.message);
      setPaymentError(null);
    } catch (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    }
  };

  return (
    <PaymentFormContainer>
      <h2>To'lovni amalga oshirish</h2>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="number"
          placeholder="To'lov summasi ($)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <CardElement />
        <StyledButton type="submit" disabled={!stripe}>
          To'lovni amalga oshirish
        </StyledButton>
        {paymentError && <p style={{ color: 'red' }}>{paymentError}</p>}
        {paymentSuccess && <p style={{ color: 'green' }}>{paymentSuccess}</p>}
      </StyledForm>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
