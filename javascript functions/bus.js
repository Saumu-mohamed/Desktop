const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter zone (1, 2, 3): ", function(zoneInput) {
  const zone = parseInt(zoneInput);

  rl.question("Enter age category (child, adult, senior): ", function(ageCategoryInput) {
    const ageCategory = ageCategoryInput.toLowerCase();

    rl.question("Enter number of passengers: ", function(passengerInput) {
      const numPassengers = parseInt(passengerInput); 

let fare = 0;

if (zone === 1) {
    if (ageCategory === "adult") {
        fare = 100;
    } else if (ageCategory === "child") {
        fare = 50;
    } else if (ageCategory === "senior") {
        fare = 70;
    }
} else if (zone === 2 ){
    if (ageCategory === "adult") {
        fare =150;
    } else if (ageCategory === "child") {
        fare = 75;
    } else if (ageCategory === "senior") {
        fare = 100;
    }
} else if (zone === 3 ){
    if (ageCategory === "adult") {
        fare = 200;
    } else if (ageCategory === "child") {
        fare = 100;
    } else if (ageCategory === "senior") {
        fare = 130;
    }
} else {
    console.log ("Invalid zone");
}

let totalFare = fare * numPassengers;

//dicount if group has 5 passengers or more
if (numPassengers >= 5) {
    totalFare *= 0.9; // 10% discount
}

console.log ("Total fare for " + numPassengers + " passengers in zone " + zone + " is: " + totalFare);

    });
  });
});
