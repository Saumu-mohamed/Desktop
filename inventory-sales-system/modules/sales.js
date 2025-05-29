[]
const { readJSON, writeJSON } = require('../utils');
const { getAllProducts, updateStock } = require('./products');

const productsFile = '../data/products.json';
const path = require('path');
const filePath = path.join(__dirname, '../data/products.json');


function sellProduct(productId, quantity) {
    const products = readJSON(productsFile);
    const sales = readJSON(salesFile);
    const product = products.find(p => p.id === productId);

    if (!product) return console.log('❌ Product not found.');
    if (product.quantity < quantity) return console.log('❌ Not enough stock.');

    product.quantity -= quantity;
    const total = quantity * product.price;
    sales.push({ productId, quantity, total, date: new Date().toISOString() });

    writeJSON(productsFile, products);
    writeJSON(salesFile, sales);
    console.log(`✅ Sold ${quantity} units. Total: $${total.toFixed(2)}`);
}

module.exports = { sellProduct };
