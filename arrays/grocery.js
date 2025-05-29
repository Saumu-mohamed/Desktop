let grocery = ["milk", "eggs", "bread"];
let itemPrice = [1.50, 2.00, 2.50];

function addItem(item, price) {
  grocery.push(item);
  itemPrice.push(price);
}

function removeItem(item) {
  let index = grocery.indexOf(item);
  if (index !== -1) {
    grocery.splice(index, 1);
    itemPrice.splice(index, 1); 
  }
}

function displayItems() {
  console.log("Grocery List:");
  for (let i = 0; i < grocery.length; i++) {
    console.log(`- ${grocery[i]} ($${itemPrice[i].toFixed(2)})`);
  }
}

function countItems() {
  console.log("Total items: " + grocery.length);
}

function totalCost() {
  let total = 0;
  for (let i = 0; i < itemPrice.length; i++) {
    total += itemPrice[i];
  }
  console.log("Total cost: $" + total.toFixed(2));
}

addItem("butter", 3.00);
removeItem("eggs");
displayItems();
countItems();
totalCost();
