class PaymentService {
    constructor() {
        this.payments = [];
    }

    processPayment(amount, paymentMethod) {
        if (amount <= 0) {
            throw new Error('Amount must be greater than zero');
        }

        const payment = {
            id: Date.now(),
            amount,
            paymentMethod,
            status: 'completed',
            timestamp: new Date(),
        };

        this.payments.push(payment);
        return payment;
    }

    getPaymentHistory() {
        return this.payments;
    }

    refundPayment(paymentId) {
        const payment = this.payments.find(p => p.id === paymentId);
        if (!payment) {
            throw new Error('Payment not found');
        }
        payment.status = 'refunded';
        return payment;
    }
}

module.exports = PaymentService;