const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let students = [];

function menu() {
    console.log(`
=== Student Gradebook System ===
1. Add Student
2. Update Student
3. Delete Student
4. Add/Edit Grades
5. View All Students
6. Class Performance Summary
7. Top Performing Student(s)
0. Exit
  `);
    rl.question("Choose an option: ", handleMenu);
}

function handleMenu(option) {
    switch (option) {
        case '1': return addStudent();
        case '2': return updateStudent();
        case '3': return deleteStudent();
        case '4': return addOrEditGrades();
        case '5': return viewAllStudents();
        case '6': return classPerformanceSummary();
        case '7': return topStudents();
        case '0': rl.close(); break;
        default: console.log("Invalid option."); menu();
    }
}

function addStudent() {
    rl.question("Enter Student ID: ", id => {
        rl.question("Enter Student Name: ", name => {
            rl.question("Enter Class: ", studentClass => {
                students.push({ id, name, class: studentClass, grades: {} });
                console.log("Student added successfully.");
                menu();
            });
        });
    });
}

function updateStudent() {
    rl.question("Enter Student ID to update: ", id => {
        const student = students.find(s => s.id === id);
        if (!student) return console.log("Student not found."), menu();
        rl.question("Enter New Name: ", name => {
            rl.question("Enter New Class: ", studentClass => {
                student.name = name;
                student.class = studentClass;
                console.log("Student updated.");
                menu();
            });
        });
    });
}

function deleteStudent() {
    rl.question("Enter Student ID to delete: ", id => {
        students = students.filter(s => s.id !== id);
        console.log("Student deleted if ID existed.");
        menu();
    });
}

function addOrEditGrades() {
    rl.question("Enter Student ID: ", id => {
        const student = students.find(s => s.id === id);
        if (!student) return console.log("Student not found."), menu();
        rl.question("Enter Subject (e.g., Math): ", subject => {
            rl.question(`Enter Score for ${subject}: `, score => {
                student.grades[subject] = parseFloat(score);
                console.log("Grade recorded.");
                menu();
            });
        });
    });
}

function viewAllStudents() {
    if (students.length === 0) console.log("No students to display.");
    students.forEach(s => {
        console.log(`\nID: ${s.id}, Name: ${s.name}, Class: ${s.class}`);
        console.log("Grades:");
        for (let [subject, score] of Object.entries(s.grades)) {
            console.log(` - ${subject}: ${score}`);
        }
    });
    menu();
}

function classPerformanceSummary() {
    if (students.length === 0) return console.log("No students."), menu();
    let totalGrades = 0;
    let gradeCount = 0;
    students.forEach(s => {
        for (let score of Object.values(s.grades)) {
            totalGrades += score;
            gradeCount++;
        }
    });
    const average = gradeCount ? (totalGrades / gradeCount).toFixed(2) : 0;
    console.log(`\nClass Average Score: ${average}`);
    menu();
}

function topStudents() {
    let maxAvg = 0;
    let top = [];

    students.forEach(s => {
        const scores = Object.values(s.grades);
        if (scores.length === 0) return;
        const avg = scores.reduce((a, b) => a + b) / scores.length;
        if (avg > maxAvg) {
            maxAvg = avg;
            top = [s];
        } else if (avg === maxAvg) {
            top.push(s);
        }
    });

    if (top.length === 0) return console.log("No grades available."), menu();

    console.log(`\nTop Performing Student(s) with Avg ${maxAvg.toFixed(2)}:`);
    top.forEach(s => {
        console.log(`- ${s.name} (ID: ${s.id}, Class: ${s.class})`);
    });
    menu();
}

menu();
