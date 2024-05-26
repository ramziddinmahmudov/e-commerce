// server.js
const express = require('express');
const stripe = require('stripe')('YOUR_SECRET_STRIPE_KEY');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/create-payment-intent', async (req, res) => {
  const { paymentMethodId, amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // to'lov summasi sentlarda
      currency: 'usd',
      payment_method: paymentMethodId,
      confirm: true,
    });

    res.send({ success: true });
  } catch (error) {
    res.send({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log('Server 3001 portda ishlamoqda');
});
