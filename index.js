const rental = require('./Jeremy_CarRental.js');

// Add a car

rental.addCar("Honda", "N-Box", 5, 660, "SGN9320K");

// Start a rental

console.log(rental.rentCar("SGN9320K", 1, Date.now(), Date.now() + 7200000)); // The endDateTime is set 2 hours from now

// When a user tries to book a car that is still rented under another user.

console.log(rental.rentCar("SGN9320K", 2, Date.now(), Date.now() + 7200000));

// End the rental

console.log(rental.endRental(3));

// Booking a car without providing startDateTime (the rental will start immediately) and/or endDateTime (the rental will be charged at a higher rate)

console.log(rental.rentCar("SFK3390A", 1));

// Search for a car with desired requirements

console.log(rental.searchCar({seats: 5}));
console.log(rental.searchCar({make: "Toyota"}));

// Check pervious bookings made with a specific car, ongoing or not

console.log(rental.checkBookings("SGN9320K"));