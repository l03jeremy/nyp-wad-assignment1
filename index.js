const rental = require('./Jeremy_CarRental.js');

//console.log(rental.checkBookings("SDP8160L"));
rental.addCar("Honda", "NBox", 5, 660, "t");
//rental.searchCar({seats: 5});


console.log(rental.rentCar("t", 1, Date.now(), Date.now() + 7200000));
console.log(rental.rentCar("t", 2, Date.now(), Date.now() + 7200000));
console.log(rental.rental)
//console.log(rental.endRental(3));