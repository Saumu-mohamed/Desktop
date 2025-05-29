const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the number of electricity units consumed: ", (inputUnits) => {
  let units = parseFloat(inputUnits);
  let charge = 0;

  if (units <= 100) {
    charge = units * 10;
  } else if (units <= 200) {
    charge = (100 * 10) + ((units - 100) * 15);
  } else if (units <= 500) {
    charge = (100 * 10) + (100 * 15) + ((units - 200) * 20);
  } else {
    charge = (100 * 10) + (100 * 15) + (300 * 20) + ((units - 500) * 25);
  }

  let serviceCharge = 250;

  let subsidy = (units <= 150) ? 100 : 0;

  let totalBill = charge + serviceCharge - subsidy;


  console.log(`Your electricity bill is: Ksh ${totalBill.toFixed(2)}`);

  rl.close();
});
