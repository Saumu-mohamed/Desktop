function 
totalCost(burgerQuantity, friesQuantity ,drinkQuantity) {
    const burgerPrice = 300;
    const friesPrice = 100;
    const drinkPrice = 150;
    const total = (burgerQuantity * burgerPrice) + (friesQuantity * friesPrice) + (drinkQuantity * drinkPrice);
return total;
}
const burgerQuantity = 2;
const friesQuantity = 3;
const drinkQuantity = 10;

console.log ( totalCost(burgerQuantity,drinkQuantity,friesQuantity))
