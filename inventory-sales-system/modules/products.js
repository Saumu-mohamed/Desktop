[]
const { readJSON, writeJSON } = require('../utils');
const path = require('path');
const filePath = path.join(__dirname, '../data/products.json');


function getAllProducts() {
    return readJSON(filePath);
}

function showAllProducts() {
    const products = getAllProducts();
    console.table(products);
}

function addProduct(id, name, price, quantity) {
    const products = getAllProducts();
    if (products.find(p => p.id === id)) return console.log('❌ Product ID already exists!');
    products.push({ id, name, price, quantity });
    writeJSON(filePath, products);
    console.log(' Product added successfully.');
}

function updateStock(id, quantity) {
    const products = getAllProducts();
    const product = products.find(p => p.id === id);
    if (!product) return console.log(' Product not found.');
    product.quantity = quantity;
    writeJSON(filePath, products);
    console.log('Stock updated.');
}

function deleteProduct(id) {
    let products = getAllProducts();
    products = products.filter(p => p.id !== id);
    writeJSON(filePath, products);
    console.log('Product deleted.');
}

module.exports = { showAllProducts, addProduct, updateStock, deleteProduct, getAllProducts };
