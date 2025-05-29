const { readJSON } = require('../utils');
const filePath = '../data/sales.json';

function showSalesReport() {
    const sales = readJSON(filePath);
    if (sales.length === 0) return console.log('📉 No sales yet.');

    console.table(sales);

    const totalEarned = sales.reduce((sum, s) => sum + s.total, 0);
    console.log(`💰 Total Earned: $${totalEarned.toFixed(2)}`);

    const counts = {};
    sales.forEach(s => counts[s.productId] = (counts[s.productId] || 0) + s.quantity);
    const best = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];

    console.log(`🏆 Top Product ID: ${best[0]} (Sold: ${best[1]} units)`);
}

module.exports = { showSalesReport };
