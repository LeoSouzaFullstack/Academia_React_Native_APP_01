/**
 * IUserRepository - Interface for User data persistence operations
 */
class IUserRepository {
    /**
     * Find a user by ID
     * @param {string} id - User ID
     * @returns {Promise<User|null>}
     */
    async findById(id) {
        throw new Error('Method not implemented');
    }

    /**
     * Find a user by email
     * @param {string} email - User email
     * @returns {Promise<User|null>}
     */
    async findByEmail(email) {
        throw new Error('Method not implemented');
    }

    /**
     * Get all users
     * @returns {Promise<User[]>}
     */
    async findAll() {
        throw new Error('Method not implemented');
    }

    /**
     * Create a new user
     * @param {Object} userData - User data
     * @returns {Promise<User>}
     */
    async create(userData) {
        throw new Error('Method not implemented');
    }

    /**
     * Update an existing user
     * @param {string} id - User ID
     * @param {Object} userData - Updated user data
     * @returns {Promise<User>}
     */
    async update(id, userData) {
        throw new Error('Method not implemented');
    }

    /**
     * Delete a user
     * @param {string} id - User ID
     * @returns {Promise<boolean>}
     */
    async delete(id) {
        throw new Error('Method not implemented');
    }
}

module.exports = IUserRepository;