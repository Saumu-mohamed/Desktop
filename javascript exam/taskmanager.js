const { read } = require('fs');
const { Readline } = require('readline/promises');

let tasks = [];


function addTask(description) {
    const newTask = {
        description: description,
        completed: false
    };
    tasks.push(newTask);
    console.log("Task added successfully!");
}


function viewTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
    } else {
        console.log("Tasks:");
        tasks.forEach((tasks, index) => {
            console.log(`${index + 1}. ${tasks.description} - ${tasks.completed ? "Completed" : "Not Completed"}`);
        });
    }
}

function markTaskAsCompleted(index) {

    if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        console.log(`Task ${index + 1} marked as completed.`);
    } else {
        console.log("Invalid task index.");
    }
}

function removeTask(index) {
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        console.log("Task removed.");
    } else {
        console.log("Invalid task number.");
    }
}

const readline = require('readline').Interface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log("1. Add Task");
    console.log("2. View Tasks");
    console.log("3. Mark Task as Completed");
    console.log("4. Remove Task");
    console.log("5. Exit");

    readline.question("Choose an option (1-5): ", choice => {
        handleUserChoice(choice);
    })
}

function handleUserChoice(choice) {
    switch (choice) {
        case '1':
            readline.question("Enter task description: ", description => {
                addTask(description);
                showMenu();
            });
            break;
        case '2':
            viewTasks();
            showMenu();
            break;
        case '3':
            readline.question("Enter task number to mark as completed: ", index => {
                markTaskAsCompleted(index - 1);
                showMenu();
            });
            break;
        case '4':
            readline.question("Enter task number to remove: ", index => {
                removeTask(index - 1);
                showMenu();
            });
            break;
        case '5':
            console.log("Exiting...");
            readline.close();
            break;
        default:
            console.log("Invalid choice. Please try again.");
            showMenu();
    }
}
showMenu();