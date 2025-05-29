// Assuming stocks is an array where index 0 corresponds to item 101, etc.
const stocks = [/* your array of stock levels here */];

for (let i = 0; i < 30; i++) {
    const itemCode = 101 + i;
    if (stocks[i] < 10) {
        console.log(`Item ${itemCode}: Reorder`);
    }
}