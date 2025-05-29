let balance = 100;
const monthlyInterestRate = 0.02; // 2%

for (let month = 1; month <= 12; month++) {
    balance *= (1 + monthlyInterestRate);
    console.log(`Month ${month}: $${balance.toFixed(2)}`);
}
