const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let size, crust, quantity, distance;

const askQuestions = () => {
  rl.question("Choose pizza size: Small, Medium, or Large: ", (inputSize) => {
    size = inputSize.toLowerCase();

    rl.question("Choose crust type: Thin or Stuffed: ", (inputCrust) => {
      crust = inputCrust.toLowerCase();

      rl.question("How many pizzas do you want? ", (inputQuantity) => {
        quantity = parseInt(inputQuantity);

        rl.question("Enter delivery distance in kilometers: ", (inputDistance) => {
          distance = parseFloat(inputDistance);

          calculateTotal();
          rl.close();
        });
      });
    });
  });
};

const calculateTotal = () => {
  let basePrice = 0;
  let crustCharge = 0;

  if (size === "small") {
    basePrice = 600;
  } else if (size === "medium") {
    basePrice = 800;
  } else if (size === "large") {
    basePrice = 1000;
  } else {
    console.log("Invalid pizza size selected.");
    return;
  }

  if (crust === "stuffed") {
    crustCharge = 150;
  }

  let pizzaTotal = quantity * (basePrice + crustCharge);

  let deliveryCharge = 0;
  if (quantity < 4) {
    if (distance <= 5) {
      deliveryCharge = 200;
    } else {
      deliveryCharge = 200 + (distance - 5) * 20;
    }
  }

  let grandTotal = pizzaTotal + deliveryCharge;

  console.log(`Grand Total: Ksh ${grandTotal.toFixed(2)}`);
};

askQuestions();
