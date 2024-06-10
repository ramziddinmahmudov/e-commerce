const express = require('express');
const Stripe = require('stripe');
const bodyParser = require('body-parser');
const cors = require('cors');

const stripe = Stripe('YOUR_STRIPE_SECRET_KEY'); // Replace with your Stripe secret key

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/pay', async (req, res) => {
  const { token, amount } = req.body;

  try {
    // Create a charge
    const charge = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      payment_method: token,
      confirm: true,
    });

    // You would need to create a connected account for the destination
    // and transfer funds to the connected account
    const transfer = await stripe.transfers.create({
      amount: amount,
      currency: 'usd',
      destination: 'DESTINATION_ACCOUNT_ID', // Replace with the connected account ID
    });

    res.send({ message: 'Payment successful', charge, transfer });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
