
const  petrolPricePerLitre  =  190; //ksh 
const  distancePerLitre  =  35; //km
const  distancePerDay  =  105; //km
const  dailyFares  =  1200; //ksh
const  dailySetAside  =  150;  //ksh

const litresUsed = distancePerDay / distancePerLitre;

const petrolCost = litresUsed * petrolPricePerLitre;

const netProfit = dailyFares - petrolCost - dailySetAside;

console.log("(a) Litres of petrol used: " +
    litresUsed.toFixed(2));
    console.log("(b) Daily cost of petrol: Ksh " +
    netProfit.toFixed(2));

