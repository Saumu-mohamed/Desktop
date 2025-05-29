let expenses = [300, 200, 450];
let budget = 1000;

function addExpense(amount) {
  expenses.push(amount);
}

function calculateTotal() {
  let total = 0;
  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
  }
  return total;
}

function checkBudget() {
  let total = calculateTotal();
  console.log("Total expenses: $" + total);
  if (total > budget) {
    console.log("Warning: Expenses exceeded the budget!");
  } else {
    console.log("You are within the budget.");
  }
}

addExpense(150);
checkBudget();
