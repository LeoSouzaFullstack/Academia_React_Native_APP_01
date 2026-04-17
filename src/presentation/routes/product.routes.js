const express = require('express');

const router = express.Router();

// GET all products
router.get('/', (req, res) => {
    res.json({ message: 'Get all products' });
});

// GET product by ID
router.get('/:id', (req, res) => {
    res.json({ message: `Get product ${req.params.id}` });
});

// POST create product
router.post('/', (req, res) => {
    res.json({ message: 'Create product' });
});

// PUT update product
router.put('/:id', (req, res) => {
    res.json({ message: `Update product ${req.params.id}` });
});

// DELETE product
router.delete('/:id', (req, res) => {
    res.json({ message: `Delete product ${req.params.id}` });
});

module.exports = router;