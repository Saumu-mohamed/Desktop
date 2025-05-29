const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
const seatsPerRow = 8;
let seatLabels = [];

for (let row of rows) {
    for (let seat = 1; seat <= seatsPerRow; seat++) {
        seatLabels.push(`${row}${seat}`);
    }
}

console.log(seatLabels.join(', '));
