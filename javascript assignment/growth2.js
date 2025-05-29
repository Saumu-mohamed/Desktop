let balance= 100
let interestrate= 0.02


for(let month=1;month<=12;month++){
    let interest = balance * interestrate;
    balance += interest;
    console.log(`Month ${month}: $${balance.toFixed(2)}`);

}