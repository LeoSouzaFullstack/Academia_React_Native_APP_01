class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }

    async createOrder(req, res) {
        try {
            const { userId, items, totalPrice } = req.body;
            const order = await this.orderService.createOrder(userId, items, totalPrice);
            res.status(201).json(order);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getOrderById(req, res) {
        try {
            const { orderId } = req.params;
            const order = await this.orderService.getOrderById(orderId);
            res.status(200).json(order);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async listOrders(req, res) {
        try {
            const orders = await this.orderService.listOrders();
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateOrder(req, res) {
        try {
            const { orderId } = req.params;
            const updateData = req.body;
            const order = await this.orderService.updateOrder(orderId, updateData);
            res.status(200).json(order);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteOrder(req, res) {
        try {
            const { orderId } = req.params;
            await this.orderService.deleteOrder(orderId);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = OrderController;