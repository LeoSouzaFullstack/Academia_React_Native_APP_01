class Product {
  constructor(id, name, description, price, category, stock, createdAt) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.stock = stock;
    this.createdAt = createdAt || new Date();
  }

  isAvailable() {
    return this.stock > 0;
  }

  updateStock(quantity) {
    this.stock += quantity;
  }

  getDiscountedPrice(discountPercent) {
    return this.price * (1 - discountPercent / 100);
  }
}
