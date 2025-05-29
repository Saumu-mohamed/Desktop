const readline = require("readline-sync");

let expenses = [];
let categories = ["Food", "Transport", "Rent", "Utilities"];
let budgets = {};

function mainMenu() {
    while (true) {
        console.log("\n--- Personal Expense Tracker ---");
        console.log("1. Manage Expenses");
        console.log("2. Manage Categories");
        console.log("3. Budget & Summary");
        console.log("4. Reports");
        console.log("5. Exit");

        const choice = readline.question("Select an option: ");
        switch (choice) {
            case "1": manageExpenses(); break;
            case "2": manageCategories(); break;
            case "3": budgetSummary(); break;
            case "4": showReports(); break;
            case "5": return;
            default: console.log("Invalid option. Try again.");
        }
    }
}

function manageExpenses() {
    console.log("\n--- Expense Management ---");
    console.log("1. Add Expense");
    console.log("2. Update Expense");
    console.log("3. Delete Expense");
    const choice = readline.question("Choose an action: ");

    switch (choice) {
        case "1": addExpense(); break;
        case "2": updateExpense(); break;
        case "3": deleteExpense(); break;
        default: console.log("Invalid option.");
    }
}

function addExpense() {
    const date = readline.question("Date (YYYY-MM-DD): ");
    const amount = parseFloat(readline.question("Amount: "));
    const category = readline.question("Category: ");
    const description = readline.question("Description: ");

    expenses.push({ date, amount, category, description });
    console.log("Expense added successfully.");
}

function updateExpense() {
    viewAllExpenses();
    const index = readline.questionInt("Enter index of expense to update: ");
    if (index >= 0 && index < expenses.length) {
        const updatedAmount = parseFloat(readline.question("New Amount: "));
        expenses[index].amount = updatedAmount;
        console.log("Expense updated.");
    } else {
        console.log("Invalid index.");
    }
}

function deleteExpense() {
    viewAllExpenses();
    const index = readline.questionInt("Enter index of expense to delete: ");
    if (index >= 0 && index < expenses.length) {
        expenses.splice(index, 1);
        console.log("Expense deleted.");
    } else {
        console.log("Invalid index.");
    }
}

function manageCategories() {
    console.log("\n--- Category Management ---");
    console.log("1. Add Category");
    console.log("2. Delete Category");

    const choice = readline.question("Choose an action: ");
    switch (choice) {
        case "1":
            const newCat = readline.question("New Category: ");
            categories.push(newCat);
            console.log("Category added.");
            break;
        case "2":
            const delCat = readline.question("Category to remove: ");
            categories = categories.filter(cat => cat !== delCat);
            console.log("Category removed.");
            break;
        default:
            console.log("Invalid option.");
    }
}

function budgetSummary() {
    console.log("\n--- Budget & Summary ---");
    categories.forEach(cat => {
        const budget = parseFloat(readline.question(`Set budget for ${cat}: `));
        budgets[cat] = budget;
    });

    let totals = {};
    expenses.forEach(exp => {
        totals[exp.category] = (totals[exp.category] || 0) + exp.amount;
    });

    console.log("\n--- Budget Report ---");
    for (let cat in budgets) {
        const spent = totals[cat] || 0;
        console.log(`${cat}: Spent $${spent} / Budget $${budgets[cat]} ${spent > budgets[cat] ? "(OVER BUDGET!)" : ""}`);
    }
}

function showReports() {
    console.log("\n--- Expense Reports ---");
    console.log("1. View All Expenses");
    console.log("2. Monthly Summary");
    console.log("3. Top Spending Categories");

    const choice = readline.question("Choose an action: ");
    switch (choice) {
        case "1": viewAllExpenses(); break;
        case "2": monthlySummary(); break;
        case "3": topCategories(); break;
        default: console.log("Invalid option.");
    }
}

function viewAllExpenses() {
    console.log("\n--- All Expenses ---");
    expenses.forEach((e, index) => {
        console.log(`${index}: ${e.date} | $${e.amount} | ${e.category} | ${e.description}`);
    });
}

function monthlySummary() {
    const month = readline.question("Enter month (YYYY-MM): ");
    const monthlyExpenses = expenses.filter(e => e.date.startsWith(month));
    const total = monthlyExpenses.reduce((sum, e) => sum + e.amount, 0);
    console.log(`Total spending in ${month}: $${total}`);
}

function topCategories() {
    let totals = {};
    expenses.forEach(e => {
        totals[e.category] = (totals[e.category] || 0) + e.amount;
    });

    const sorted = Object.entries(totals).sort((a, b) => b[1] - a[1]);
    console.log("\nTop Spending Categories:");
    sorted.forEach(([cat, amt]) => console.log(`${cat}: $${amt}`));
}

mainMenu();
