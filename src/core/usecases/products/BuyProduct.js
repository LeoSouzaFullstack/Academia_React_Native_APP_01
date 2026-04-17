class BuyProduct {
    constructor(productRepository, orderRepository) {
        this.productRepository = productRepository;
        this.orderRepository = orderRepository;
    }

    async execute(userId, productId, quantity) {
        const product = await this.productRepository.findById(productId);
        
        if (!product) {
            throw new Error('Product not found');
        }

        if (product.stock < quantity) {
            throw new Error('Insufficient stock');
        }

        const order = {
            userId,
            productId,
            quantity,
            totalPrice: product.price * quantity,
            createdAt: new Date(),
        };

        const savedOrder = await this.orderRepository.save(order);
        await this.productRepository.decreaseStock(productId, quantity);

        return savedOrder;
    }
}

module.exports = BuyProduct;