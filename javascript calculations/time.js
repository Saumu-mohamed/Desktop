 
const traindeparture = new Date("2025-05-0615:00:00"); //3:00 PM

const checkindeadline = new Date(traindeparture.getTime()- 60 * 60000);

const traveltimetoterminus = (90*60000);

const leavehometime = new Date(checkindeadline.getTime() - traveltimetoterminus);

const traintravelduration = 5*60*60000;
const arrivalinmombasa = new Date(traindeparture.getTime() + traintravelduration);

const taxitohotelduration = 40*60000;
const arrivalathotel = new Date(arrivalinmombasa.getTime() + taxitohotelduration)

console.log("Latest arrival at syokimau terminus:", checkindeadline.toLocaleTimeString());
console.log("Latest time to leave home (kasarani):", leavehometime.toLocaleTimeString());
console.log("Estimated arrival at Diani Hotel:", arrivalathotel.toLocaleTimeString());