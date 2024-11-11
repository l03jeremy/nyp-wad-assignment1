module.exports = {
    vehicles : [
        {
            id: 1,
            make: "Honda",
            model: "City",
            seats: 5,
            cap: 1500
        },
        {
            id: 2,
            make: "Toyota",
            model: "Vios",
            seats: 5,
            cap: 1500
        },
        {
            id: 3,
            make: "Toyota",
            model: "Noah",
            seats: 7,
            cap: 2000
        },
    ],
    user: [
        {
            id: 1,
            name: "Jack Ingoff",
            age: 20,
            phone: "89347337",
            admin: true,
        }
    ],
    rental : [
        {
            id: 1,
            customerID: 1,
            startDateTime: "",
            endDateTime: null,
            vehicleID: "",
            estPrice: "",
            paid: false,
        },
    ],
    // Explain what function A does
    addCar(d) {
        this.vehicles.push({make, model, seats, cap});
    },
    // Explain what function B does
    addCustomer(d) {

        this.customer.push({name, age, phone});
    },
    bookCar(d) {
        var bookdate = Date.now();
        this.rental.push({customerID, bookdate, endDate, estPrice, paid});
    },
    endRental(i) {
        const rate = 8;
        var enddate = Date.now();
        var reservation = this.rental.find(r => r.id == Number(i));
        var fees = ((reservation.startDateTime - enddate)/ (1000 * 60 * 60))*rate; // find out the hours rented by the user and calculate the fees

        return `Rental ended. Outstanding fees: ${fees}`;
    },
    getCustomerDetails(i) {
        return user.find(c => c.id === i);
    },
    getCarDetails(i) {
        return vehicle.find(v => v.id === i);
    },
    getReservationDetails(i) {
        return this.rental.find(r => r.id === i);
    }
}