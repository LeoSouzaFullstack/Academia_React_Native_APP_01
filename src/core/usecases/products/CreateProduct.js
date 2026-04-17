class CreateProduct {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute(productData) {
        if (!productData.name || !productData.price) {
            throw new Error('Name and price are required');
        }

        const product = {
            id: this.generateId(),
            name: productData.name,
            price: productData.price,
            description: productData.description || '',
            createdAt: new Date(),
        };

        return await this.productRepository.save(product);
    }

    generateId() {
        return Math.random().toString(36).substr(2, 9);
    }
}

module.exports = CreateProduct;