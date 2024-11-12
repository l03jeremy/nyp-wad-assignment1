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
            startDateTime: 1731249100000,
            endDateTime: null,
            vehicleID: "",
            ended: true,
        },
        {
            id: 2,
            customerID: 2,
            startDateTime: 1731249100000,
            endDateTime: 1731340800000,
            vehicleID: "",
            ended: true,
        },
    ],
    // Explain what function A does
    addCar(make, model, seats, cap) {
        const id = Math.max(...vehicles.map(vehicle => vehicle.id)) + 1;
        this.vehicles.push({id, make, model, seats, cap});
    },
    // Explain what function B does
    register(name, age, phone) {
        const id = Math.max(...user.map(u => u.id)) + 1;
        this.user.push({id, name, age, phone});
    },
    rentCar(d) {
        var bookdate = Date.now();
        this.rental.push({customerID, bookdate, endDate, estPrice, paid});
    },
    endRental(i) {
        const rate = 10;
        var enddate = Date.now();
        var reservation = this.rental.find(r => r.id == Number(i));
        var fees;
        if(reservation.endDateTime == null) {
            fees = Math.round(((enddate - reservation.startDateTime) / (3600000)) * rate * 100) / 100;  // find out the hours rented by the user and calculate the fees
        } else {
            fees = (reservation.startDateTime - reservation.endDateTime) / (1000 * 60 * 60) * rate;  // if the user has stated their end perios before, calculate directly
        }
        //''this.rental.splice(reservation, 1);
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
    },
    searchCar(detail) {
        var make;
        var model;
        var cap;
        var seats;
        
    }
}