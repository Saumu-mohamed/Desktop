const readline = require("readline-sync");

let books = [];
let members = [];
let borrowHistory = [];

function findBookById(id) {
    return books.find(book => book.id === id);
}

function findMemberById(id) {
    return members.find(member => member.id === id);
}

function addBook() {
    const id = readline.question("Enter Book ID: ");
    const title = readline.question("Enter Book Title: ");
    const author = readline.question("Enter Book Author: ");
    const copies = parseInt(readline.question("Enter number of copies: "), 10);

    books.push({ id, title, author, copies, borrowCount: 0 });
    console.log("Book added successfully.\n");
}

function removeBook() {
    const id = readline.question("Enter Book ID to remove: ");
    books = books.filter(book => book.id !== id);
    console.log("Book removed successfully.\n");
}

function updateBookCopies() {
    const id = readline.question("Enter Book ID: ");
    const book = findBookById(id);
    if (book) {
        const newCopies = parseInt(readline.question("Enter new number of copies: "), 10);
        book.copies = newCopies;
        console.log("Book updated successfully.\n");
    } else {
        console.log("Book not found.\n");
    }
}

function viewAllBooks() {
    console.log("\n--- Book List ---");
    books.forEach(book => {
        console.log(`${book.id}: ${book.title} by ${book.author} (Copies: ${book.copies})`);
    });
    console.log();
}

function registerMember() {
    const id = readline.question("Enter Member ID: ");
    const name = readline.question("Enter Member Name: ");
    const contact = readline.question("Enter Contact Info: ");
    members.push({ id, name, contact });
    console.log("Member registered successfully.\n");
}

function viewAllMembers() {
    console.log("\n--- Member List ---");
    members.forEach(member => {
        console.log(`${member.id}: ${member.name} (${member.contact})`);
    });
    console.log();
}

function borrowBook() {
    const memberId = readline.question("Enter Member ID: ");
    const bookId = readline.question("Enter Book ID: ");

    const book = findBookById(bookId);
    if (book && book.copies > 0) {
        book.copies--;
        book.borrowCount++;
        borrowHistory.push({ memberId, bookId, action: "borrow", date: new Date() });
        console.log("Book borrowed successfully.\n");
    } else {
        console.log("Book not available.\n");
    }
}

function returnBook() {
    const memberId = readline.question("Enter Member ID: ");
    const bookId = readline.question("Enter Book ID: ");

    const book = findBookById(bookId);
    if (book) {
        book.copies++;
        borrowHistory.push({ memberId, bookId, action: "return", date: new Date() });
        console.log("Book returned successfully.\n");
    } else {
        console.log("Book not found.\n");
    }
}

function showBorrowedBooks() {
    console.log("\n--- Borrowed Books ---");
    borrowHistory
        .filter(record => record.action === "borrow")
        .forEach(record => {
            console.log(`Member: ${record.memberId}, Book: ${record.bookId}, Date: ${record.date.toLocaleString()}`);
        });
    console.log();
}

function showMostBorrowedBook() {
    if (books.length === 0) {
        console.log("No books available.\n");
        return;
    }

    const mostBorrowed = books.reduce((prev, curr) => (curr.borrowCount > prev.borrowCount ? curr : prev));
    console.log(`\nMost Borrowed Book: ${mostBorrowed.title} (${mostBorrowed.borrowCount} times)\n`);
}

function menu() {
    while (true) {
        console.log(`--- Library Management System ---`);
        console.log("1. Add Book");
        console.log("2. Remove Book");
        console.log("3. Update Book Copies");
        console.log("4. View All Books");
        console.log("5. Register Member");
        console.log("6. View All Members");
        console.log("7. Borrow Book");
        console.log("8. Return Book");
        console.log("9. Show Borrowed Books");
        console.log("10. Show Most Borrowed Book");
        console.log("0. Exit");

        const choice = readline.question("Enter your choice: ");

        switch (choice) {
            case "1": addBook(); break;
            case "2": removeBook(); break;
            case "3": updateBookCopies(); break;
            case "4": viewAllBooks(); break;
            case "5": registerMember(); break;
            case "6": viewAllMembers(); break;
            case "7": borrowBook(); break;
            case "8": returnBook(); break;
            case "9": showBorrowedBooks(); break;
            case "10": showMostBorrowedBook(); break;
            case "0": console.log("Exiting..."); return;
            default: console.log("Invalid choice.\n");
        }
    }
}

menu();
