module.exports = {
    vehicles : [
        {
            id: 1,
            make: "Honda",
            model: "City",
            seats: 5,
            cap: 1500,
            regno: "SDP8160L",
        },
        {
            id: 2,
            make: "Toyota",
            model: "Vios",
            seats: 5,
            cap: 1500,
            regno: "SDQ320P",
        },
        {
            id: 3,
            make: "Toyota",
            model: "Noah",
            seats: 7,
            cap: 2000,
            regno: "SFK3390A",
        },
    ],
    user: [
        {
            id: 1,
            username: "ng",
            name: "Nas Giggers",
            age: 20,
            phone: "89347337",
        },
        {
            id: 2,
            username: "jk",
            name: "Jill Kews",
            age: 20,
            phone: "94375849",
        }
    ],
    rental : [
        {
            id: 1,
            customerID: 1,
            startDateTime: 1731249100000,
            endDateTime: null,
            vehicleID: "SDP8160L",
            ended: true,
        },
        {
            id: 2,
            customerID: 2,
            startDateTime: 1731249100000,
            endDateTime: 1731340800000,
            vehicleID: "SDQ320P",
            ended: false,
        },
    ],
    addCar(make, model, seats, cap, regno) {
        const id = Math.max(...this.vehicles.map(vehicle => vehicle.id))+1;
        this.vehicles.push({id, make, model, seats, cap, regno});
    },
    register(username, name, age, phone) {

        // Check if all fields are empty

        if(!username || !name || !age || !phone) {
            return `All fields required`;
        }

        // Generate a 'unique' ID by checking the highest number and adding 1, then inserting it into the array

        const id = Math.max(...user.map(u => u.id)) + 1;
        this.user.push({id, username, name, age, phone});
        return `Thank you, ${name}, you have successfully registered.`;
    },
    rentCar(regno, customerID, startDateTime = null, endDateTime = null) {
        if(!customerID || !regno) return `Customer ID and car register number is required.`;
        var vehicleID = this.vehicles.find(v => v.regno == regno)?.id;
        if(!vehicleID) return `No vehicles found matching '${regno}'`;

        const id = Math.max(...this.rental.map(r => r.id)) + 1;
        var date = new Date();
        var bookdate = startDateTime || date.getTime();
        var cardetail = this.vehicles.find(v => v.id == vehicleID);
        if((endDateTime !== null && endDateTime < date.getTime()) || (startDateTime !== null && startDateTime < date.getTime())) return `You cannot end rental in the past`;
        if(!this.rental.find(r => r.vehicleID == regno && !r.ended)) {
            
            this.rental.push({
                id, 
                customerID, 
                startDateTime: bookdate, 
                endDateTime, 
                vehicleID: regno, 
                ended: false,
            });
            return `Vehicle rental started. Your car is ${cardetail.regno}. \n
            Booking details: \n
            Booking ID: ${id}, \n
            User: ${this.user.find(u => u.id == customerID).name}, \n
            Car: ${cardetail.regno}, \n
            Start Time: ${date.toLocaleString()}, \n
            ${endDateTime ? `End Time: ${new Date(endDateTime).toLocaleString()}, \n` : "No end time provided, you are being charged the normal rate."}\n`;
        } else {
            return `Vehicle rental failed. Car ${cardetail.regno} has already been booked.`;
        }
    },
    endRental(i) {
        var reservation = this.rental.find(r => r.id == Number(i));
        var enddate = new Date().getTime();

        const hourlyrate = 8;
        const normalrate = 10;
        const overdueratebymin = 0.70;

        var fees;
        if(reservation.endDateTime !== null) {
            fees = Math.round(((reservation.endDateTime - reservation.startDateTime) / (3600000)) * hourlyrate * 100) / 100;  // If the user has stated their end period before, calculate the hourly rate;
            if(enddate > reservation.endDateTime && (enddate - reservation.endDateTime) > 900000) {  // Give the user a 15 minute grace period to return their vehicles (like GetGo)
                var overdue = (enddate - reservation.endDateTime) / 60000;
                fees = fees + (overdue * overdueratebymin);  // Surcharge the user for dishonesty if they did not return the car after their stated rental period.
            }
        } else {
            fees = Math.ceil((enddate - reservation.startDateTime) / (1000 * 60 * 60)) * normalrate;  // Find out the hours rented by the user and calculate the fees by the normal rate, the minimum hours rented is 1 hour
        }
        reservation.endDateTime = enddate;
        reservation.ended = true;
        return `Your rental has ended. Outstanding fees: ${fees}`;
    },
    getCustomerDetails(i) {
        var userdetails = user.find(c => c.id === i);
        if(userdetails == null) {
            return `No such user found`; // No user is found with the following id
        } else {
            return `
                ID: ${userdetails.id} \n,
                Username: ${userdetails.username} \n,
                Name: ${userdetails.name} \n,
                Age: ${userdetails.age} \n,
                Phone: ${userdetails.phone}
            `;
        }
    },
    searchCar(detail) {
        var cars = this.vehicles.filter(v => {

            // Only check the vehicles array based on what is provided in the detail argument.

            const matchesMake = detail.make ? v.make.toLowerCase() === detail.make.toLowerCase() : true;
            const matchesModel = detail.model ? v.model.toLowerCase() === detail.model.toLowerCase() : true;
            const matchesCap = detail.cap ? v.cap === detail.cap : true;
            const matchesSeats = detail.seats ? v.seats === detail.seats : true;
            const matchesRegno = detail.regno ? v.regno.toLowerCase() === detail.regno.toLowerCase() : true; 
    
            return matchesMake && matchesModel && matchesCap && matchesSeats && matchesRegno;
        });

        return cars;
    },
    checkBookings(regno) {

        // In case the car is damaged or vandalized, the admin can look through previous bookings to find the culprit.
        
        var vehicle = this.vehicles.find(v => v.regno == regno);
        if(!vehicle) return `No vehicles found`;
        var reservations = this.rental.filter(r => r.vehicleID == vehicle.regno);
        if(reservations.length === 0) return `No one has booked this car`; // Since .filter() always returns an array, we check if the length is 0;
        return reservations;
    }
}