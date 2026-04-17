/**
 * @typedef {Object} Product
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {number} price
 * @property {string} category
 * @property {number} stock
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @interface IProductRepository
 */
export class IProductRepository {
    /**
     * @param {string} id
     * @returns {Promise<Product>}
     */
    async findById(id) {}

    /**
     * @returns {Promise<Product[]>}
     */
    async findAll() {}

    /**
     * @param {Product} product
     * @returns {Promise<Product>}
     */
    async create(product) {}

    /**
     * @param {string} id
     * @param {Product} product
     * @returns {Promise<Product>}
     */
    async update(id, product) {}

    /**
     * @param {string} id
     * @returns {Promise<void>}
     */
    async delete(id) {}

    /**
     * @param {string} category
     * @returns {Promise<Product[]>}
     */
    async findByCategory(category) {}
}