
const choreIncomePerWeek  =  250;
const  weeks  =  12;
const  brotherMonthlySend  =  1000;
const  Months  =  3;
const  withdrawalFee  =   28;
const  phoneCost  =  8500;

const  totalChoreIncome  =  choreIncomePerWeek * weeks;
const  totalBrotherSend  =  brotherMonthlySend * Months;
const  totalWithdrawalFee  =  withdrawalFee  *  Months;


const  totalMoney  =  totalChoreIncome  +  totalBrotherSend  -  totalWithdrawalFee;

console.log("Total Money Amina Will Have: ksh", totalMoney);
console.log("total phone cost" , phoneCost);

if  (totalMoney  >=  phoneCost)  {
    console.log("Amina can buy the phone.");
}  else  { console.log("Amina cannot buy the phone");
}