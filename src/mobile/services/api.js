import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create payment intent
export const createPaymentIntent = async (amount, currency = 'usd') => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100),
            currency,
        });
        return paymentIntent;
    } catch (error) {
        throw new Error(`Payment intent error: ${error.message}`);
    }
};

// Confirm payment
export const confirmPayment = async (paymentIntentId, paymentMethodId) => {
    try {
        const result = await stripe.paymentIntents.confirm(paymentIntentId, {
            payment_method: paymentMethodId,
        });
        return result;
    } catch (error) {
        throw new Error(`Payment confirmation error: ${error.message}`);
    }
};

// Retrieve payment status
export const getPaymentStatus = async (paymentIntentId) => {
    try {
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
        return paymentIntent.status;
    } catch (error) {
        throw new Error(`Payment status error: ${error.message}`);
    }
};

// Create customer
export const createCustomer = async (email, name) => {
    try {
        const customer = await stripe.customers.create({ email, name });
        return customer;
    } catch (error) {
        throw new Error(`Customer creation error: ${error.message}`);
    }
};