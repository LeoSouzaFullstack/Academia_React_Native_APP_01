class ProductRepository {
    constructor(database) {
        this.database = database;
    }

    async findAll() {
        try {
            const products = await this.database.query('SELECT * FROM products');
            return products;
        } catch (error) {
            throw new Error(`Error fetching products: ${error.message}`);
        }
    }

    async findById(id) {
        try {
            const product = await this.database.query(
                'SELECT * FROM products WHERE id = ?',
                [id]
            );
            return product[0] || null;
        } catch (error) {
            throw new Error(`Error fetching product: ${error.message}`);
        }
    }

    async create(productData) {
        try {
            const result = await this.database.query(
                'INSERT INTO products (name, price, description) VALUES (?, ?, ?)',
                [productData.name, productData.price, productData.description]
            );
            return result;
        } catch (error) {
            throw new Error(`Error creating product: ${error.message}`);
        }
    }

    async update(id, productData) {
        try {
            await this.database.query(
                'UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?',
                [productData.name, productData.price, productData.description, id]
            );
            return true;
        } catch (error) {
            throw new Error(`Error updating product: ${error.message}`);
        }
    }

    async delete(id) {
        try {
            await this.database.query('DELETE FROM products WHERE id = ?', [id]);
            return true;
        } catch (error) {
            throw new Error(`Error deleting product: ${error.message}`);
        }
    }
}

module.exports = ProductRepository;