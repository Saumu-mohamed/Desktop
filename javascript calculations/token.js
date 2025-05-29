const cheapRate = 22;
const expensiveRate = 30;

let firstPurchase = 1100;
let secondPurchase = 1000;


let firstUnits = 0;
if (firstPurchase <= cheapRate * 50) {
    firstUnits = Math.floor(firstPurchase / cheapRate);
} else {

}

let unitsBoughtSoFar = firstUnits;
let secondUnits = 0;
if (unitsBoughtSoFar >= firstUnits) {
    secondUnits = Math.floor (secondPurchase / expensiveRate);
    }

    const totalUnit = firstUnits +  secondUnits;

console.log("a) First units:", firstUnits);
console.log("b) Second units:", secondUnits);
console.log("c) Total units in May:", totalUnit);