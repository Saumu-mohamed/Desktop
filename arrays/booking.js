let movies = ["Avengers", "Inception", "Interstellar"];
let seats = [5, 3, 2]; 

function bookTicket(movieName) {
  let index = movies.indexOf(movieName);
  if (index !== -1 && seats[index] > 0) {
    seats[index] -= 1;
    console.log(`Booked 1 seat for ${movieName}. Seats left: ${seats[index]}`);
  } else {
    console.log(`Sorry, no seats available for ${movieName}`);
  }
}

function displaySeats() {
  for (let i = 0; i < movies.length; i++) {
    console.log(`${movies[i]} - Seats Available: ${seats[i]}`);
  }
}
bookTicket("Avengers");
bookTicket("Inception");
displaySeats();
