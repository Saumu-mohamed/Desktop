const readline = require('readline');
const {
    showAllProducts, addProduct, updateStock, deleteProduct
} = require('./modules/products');
const { sellProduct } = require('./modules/sales');
const { showSalesReport } = require('./modules/report');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function prompt(question) {
    return new Promise(resolve => rl.question(question, answer => resolve(answer)));
}

async function menu() {
    console.log(`\n📦 Inventory & Sales System
1. Show all products
2. Add a new product
3. Update stock
4. Delete a product
5. Make a sale
6. View sales report
7. Exit`);

    const choice = await prompt('Choose an option: ');

    switch (choice.trim()) {
        case '1':
            showAllProducts();
            break;
        case '2':
            const id = await prompt('Product ID: ');
            const name = await prompt('Name: ');
            const price = parseFloat(await prompt('Price: '));
            const quantity = parseInt(await prompt('Quantity: '));
            addProduct(id, name, price, quantity);
            break;
        case '3':
            const upId = await prompt('Product ID to update: ');
            const newQty = parseInt(await prompt('New quantity: '));
            updateStock(upId, newQty);
            break;
        case '4':
            const delId = await prompt('Product ID to delete: ');
            deleteProduct(delId);
            break;
        case '5':
            const saleId = await prompt('Product ID to sell: ');
            const saleQty = parseInt(await prompt('Quantity: '));
            sellProduct(saleId, saleQty);
            break;
        case '6':
            showSalesReport();
            break;
        case '7':
            console.log('👋 Exiting...');
            rl.close();
            return;
        default:
            console.log('❌ Invalid choice.');
    }

    setTimeout(menu, 500);
}

menu();
