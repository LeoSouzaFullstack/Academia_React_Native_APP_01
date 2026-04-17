class Order {
    constructor(id, userId, items, totalPrice, status = 'pending', createdAt = new Date()) {
        this.id = id;
        this.userId = userId;
        this.items = items; // Array of items in the order
        this.totalPrice = totalPrice;
        this.status = status; // 'pending', 'completed', 'cancelled'
        this.createdAt = createdAt;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
    }

    updateStatus(newStatus) {
        this.status = newStatus;
    }

    calculateTotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }
}

module.exports = Order;