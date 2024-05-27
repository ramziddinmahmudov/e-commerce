// server.js

const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('your_stripe_secret_key');

const app = express();
app.use(bodyParser.json());

app.post('/pay', async (req, res) => {
  try {
    const { amount, token } = req.body;

    const charge = await stripe.charges.create({
      amount: amount,
      currency: 'usd',
      source: token,
    });

    res.status(200).json({ message: 'To\'lov muvaffaqiyatli amalga oshirildi' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ${PORT}-portda ishga tushirildi`));
