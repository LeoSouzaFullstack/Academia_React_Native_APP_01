class CreateOrder {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }

    async execute(orderData) {
        if (!orderData || !orderData.items || orderData.items.length === 0) {
            throw new Error('Order must have at least one item');
        }

        const order = {
            id: Date.now().toString(),
            items: orderData.items,
            total: this.calculateTotal(orderData.items),
            status: 'pending',
            createdAt: new Date(),
        };

        return await this.orderRepository.save(order);
    }

    calculateTotal(items) {
        return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }
}

module.exports = CreateOrder;