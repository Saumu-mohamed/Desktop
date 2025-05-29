let balance = 1000;
let transactions = [];

function deposit(amount) {
  balance += amount;
  transactions.push("Deposited: $" + amount);
}

function withdraw(amount) {
  if (amount <= balance) {
    balance -= amount;
    transactions.push("Withdrew: $" + amount);
  } else {
    console.log("Insufficient balance.");
  }
}
deposit(200);
withdraw(150);
deposit(50);
withdraw(1000); 

console.log("Final balance: $" + balance);
console.log("Transaction history:");
for (let i = 0; i < transactions.length; i++) {
  console.log(transactions[i]);
}
