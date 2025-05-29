const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let assignmentScore, midtermScore, finalExamScore;

rl.question("Enter assignment score (out of 100): ", (inputAssignment) => {
  assignmentScore = parseFloat(inputAssignment);

  rl.question("Enter midterm exam score (out of 100): ", (inputMidterm) => {
    midtermScore = parseFloat(inputMidterm);

    rl.question("Enter final exam score (out of 100): ", (inputFinal) => {
      finalExamScore = parseFloat(inputFinal);

      let weightedScore = (assignmentScore * 0.3) + (midtermScore * 0.3) + (finalExamScore * 0.4);

      let grade = "";
      if (weightedScore >= 90) {
        grade = "A";
      } else if (weightedScore >= 80) {
        grade = "B";
      } else if (weightedScore >= 70) {
        grade = "C";
      } else if (weightedScore >= 60) {
        grade = "D";
      } else {
        grade = "F";
      }

      console.log(`Your final score is ${weightedScore.toFixed(2)}%. Grade: ${grade}`);

      rl.close();
    });
  });
});
