class GetOrders {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }

    async execute(filters = {}) {
        try {
            const orders = await this.orderRepository.getAll(filters);
            return {
                success: true,
                data: orders
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    }
}

module.exports = GetOrders;