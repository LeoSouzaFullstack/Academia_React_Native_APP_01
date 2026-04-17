/**
 * @interface IOrderRepository
 * Interface for Order repository operations
 */
class IOrderRepository {
    /**
     * Find an order by ID
     * @param {string} id - The order ID
     * @returns {Promise<Object>} The order object
     */
    async findById(id) {
        throw new Error('Method not implemented');
    }

    /**
     * Find all orders
     * @returns {Promise<Array>} Array of orders
     */
    async findAll() {
        throw new Error('Method not implemented');
    }

    /**
     * Create a new order
     * @param {Object} order - The order data
     * @returns {Promise<Object>} The created order
     */
    async create(order) {
        throw new Error('Method not implemented');
    }

    /**
     * Update an existing order
     * @param {string} id - The order ID
     * @param {Object} order - The order data
     * @returns {Promise<Object>} The updated order
     */
    async update(id, order) {
        throw new Error('Method not implemented');
    }

    /**
     * Delete an order
     * @param {string} id - The order ID
     * @returns {Promise<boolean>} Success status
     */
    async delete(id) {
        throw new Error('Method not implemented');
    }
}

module.exports = IOrderRepository;