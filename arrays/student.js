let studentName = "John Doe";
let scores = [85, 90, 78, 92];

let total = 0;
for (let s = 0; s < scores.length; s++) {
  total += scores[s];
}
let average = total / scores.length;

let grade  = "";
if (average >= 90) {
  grade = "A";
}
else if (average >= 80) {
  grade = "B";
}
else if (average >= 70) {
  grade = "C";
}
else if (average >= 60) {
  grade = "D";
}
else {
  grade = "F";
}
console.log( `$ {sudentName } 
    Score $ {average.toFixed(2)}
    and recieved a grade ${grade}` );
