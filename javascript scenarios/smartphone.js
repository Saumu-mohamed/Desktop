let budget = 18000; 
let phoneXCost = 15500;
let phoneYCost = 22000;

let phoneAdvice = "";

if (budget >= phoneYCost) {
    phoneAdvice = "BUY phone Y. It fits your budget and has better features.";
} else if (budget >= phoneXCost) {
    let remainingCash = budget - phoneXCost;
    phoneAdvice = "Buy Phone X. You'll have ksh" + remainingCash + " left, staying within budget.";
} else { 
    phoneAdvice = "Neither phone fits your budget. Consider saving more or finding a cheaper option.";
}

console.log(phoneAdvice);
