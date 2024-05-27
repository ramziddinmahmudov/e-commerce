import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe('your_stripe_public_key');
