class ProductController {
    constructor(productService) {
        this.productService = productService;
    }

    async getAll(req, res) {
        try {
            const products = await this.productService.getAll();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const { id } = req.params;
            const product = await this.productService.getById(id);
            
            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }
            
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async create(req, res) {
        try {
            const product = await this.productService.create(req.body);
            res.status(201).json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const product = await this.productService.update(id, req.body);
            res.status(200).json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            await this.productService.delete(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = ProductController;