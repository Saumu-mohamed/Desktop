const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function loanRepaymentExplorer() {
  try {
    const loanAmount = parseFloat(await ask("Enter the loan amount (in Ksh): "));
    const totalMonths = parseInt(await ask("Enter the total loan term (in months): "));
    const monthsPaid = parseInt(await ask("Enter the number of months already paid: "));

    if (
      isNaN(loanAmount) || isNaN(totalMonths) || isNaN(monthsPaid) ||
      loanAmount <= 0 || totalMonths <= 0 || monthsPaid < 0 || monthsPaid > totalMonths
    ) {
      console.log("Invalid input. Please ensure all values are positive numbers and monthsPaid ≤ totalMonths.");
      rl.close();
      return;
    }

    let interestRate;
    if (loanAmount < 10000) {
      interestRate = 0.10;
    } else if (loanAmount < 50000) {
      interestRate = 0.07;
    } else {
      interestRate = 0.05;
    }

    const interest = loanAmount * interestRate;
    const fee = totalMonths > 12 ? 500 : 0;

    let earlyRepayment = 0;
    if (totalMonths > monthsPaid) {
      const monthsLeft = totalMonths - monthsPaid;
      const outstandingPrincipal = loanAmount * (monthsLeft / totalMonths);
      earlyRepayment = outstandingPrincipal * 0.02;
    }

    const totalRepayment = loanAmount + interest + fee + earlyRepayment;

    console.log(`\nLoan Amount: Ksh ${loanAmount}`);
    console.log(`Interest Rate: ${(interestRate * 100).toFixed(2)}%`);
    console.log(`Interest: Ksh ${interest.toFixed(2)}`);
    console.log(`Fee: Ksh ${fee}`);
    console.log(`Early Repayment Fee: Ksh ${earlyRepayment.toFixed(2)}`);
    console.log(`Total Repayment Amount: Ksh ${totalRepayment.toFixed(2)}`);

  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    rl.close();
  }
}

loanRepaymentExplorer();
