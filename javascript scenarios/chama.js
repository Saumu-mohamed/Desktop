//calculations
let  initialCapital  =  450000;
  
//option A
let   saccoFee  =  5000;
let  saccocapital  =  initialCapital - saccoFee;
let  saccoEarning  =  saccocapital * 0.12;
let saccoNetReturn = saccoEarning - saccoFee;


//option B 
let  poultrySetupCost  =  150000;
let  poultryEarning  =30000 * 4;  //4 cycles in a year
let  poultryNetReturn  =  poultryEarning - poultrySetupCost;

//option C
let  treasuryEarnigs  =  initialCapital * 0.095;
let  treasuryNetReturn =  treasuryEarnigs; 

//Decission logic 
let advice  =  "";
if (saccoNetReturn > poultryNetReturn && saccoNetReturn > treasuryNetReturn)  {
    if (saccoNetReturn >40000) {
        advice = "invest in sacco shares. projected net return: ksh" + saccoNetReturn + "Low risk and meets return threshold.";
        }

} else if (poultryNetReturn > saccoNetReturn && poultryNetReturn > treasuryNetReturn) { 
    if (poultryNetReturn > 40000) { 
        advice = "start Poultry Farming. Projected net return: ksh" + poultryNetReturn + 
        "Medium risk but meets eturn threshold.";
    } else{
        advice = "start Poultry Farming. Projected net return: ksh" + poultryNetReturn + ".Medium risk is below ksh 40000 threshold.";
    }
}else { 
   if(treasuryNetReturn > 40000) 
{ 
    advice = "Invest in Treasury Bills.Projected net return: ksh" + treasuryNetReturn + ".Very low risk and meets return threshold.";
}else {
    advice = "Invest in Treasury Bill. Projected net rreturn ksh" + treasuryNetReturn + ".Very low risk but return is below ksh 40000 threshold.";
  }
}


console.log(advice);
