class OrderRepository {
    constructor(database) {
        this.database = database;
    }

    async create(order) {
        return this.database.orders.insert(order);
    }

    async findById(id) {
        return this.database.orders.findOne({ id });
    }

    async findAll() {
        return this.database.orders.find({});
    }

    async update(id, orderData) {
        return this.database.orders.updateOne({ id }, orderData);
    }

    async delete(id) {
        return this.database.orders.deleteOne({ id });
    }
}

module.exports = OrderRepository;