# Assignment 1

Assignment 1 Jeremy

**Car Rental Manager for a Car Rental Company** \
This app allows you to manage vehicles, users as well as bookings within the application

# Functions

* `.addCar()` - Add a vehicle to the system
* `.register()` - Register a user to the system
* `.rentCar()` - Start a rental
* `.endRental()` - End a rental
* `.getCustomerDetails()` - Get user details
* `.searchCar()` - Look for a vehicle
* `.checkBookings()` - Used to add a vehicle

# Usage

Full examples are provided in [index.js](index.js). 

Simply include the package to your project
```javascript
    const carrental = require('CarRental.js');
```
## Functions

### `.addCar(String make, String model, Int seats, Int capacity, String regno)`
Adds a vehicle to the system. All fields are required

**Parameters**:

* `make` - The manufacturer of the vehicle
* `model` - The model of the vehicle
* `seats` - The number of seats in the car
* `capacity` - The engine capacity of the vehicle
* `regno` - The registration number of the vehicle

**Returns**:

* Confirmation of adding the car to the system

**Example Usage**:
```javascript
    carrental.addCar("Opel", "Astra", 5, 1800, "SBA1234A");
```

---

### `.register(String username, String fullname, Int age, Int phone)`
Register a user to the system. All fields are required.

**Parameters**:

* `username` - The username of the user
* `fullname` - The full name of the user
* `age` - The age of the user
* `phone` - The phone number of the user

**Returns**:

* Confirmation of adding the user to the system

**Example Usage**:
```javascript
    carrental.register("username", "User Name", 20, 91234567);
```

---

### `.rentCar(String regno, Int customerId, Int startDateTime = null, Int endDateTime = null)`
Start a rental.

**Parameters**:

* `regno` - The registration number of the renting vehicle
* `customerId` - The ID of the renter
* `startDateTime` - The start date and time of the rental, in unix time
* `endDateTime` - The end date and time of the rental, in unix time

**Returns**:

* Booking details

**Example Usage**:

There are multiple ways to rent a car as a user, on demand, or by specifying a time frame. 
* **On-demand rental**

    You can use the function to start the rental on demand. 

    ```javascript
        // Basic Usage. Starts the rental on demand
        carrental.rentCar("SBA1234A", 1);
    ```

* **Specified rental period**

    You can also use the function to start the rental on a specific date or time.
    ```javascript
        // Start the rental with only a specific start time
        carrental.rentCar("SBA1234A", 1, 1731249100000);

        // Start the rental with a specific start time and end time
        carrental.rentCar("SBA1234A", 1, 1731249100000, 1731340800000);

        // Start the rental with only a specified end time (if user wants to enjoy lower rates)
        carrental.rentCar("SBA1234A", 1, null, 1731340800000);
    ```

---

### `.endRental(Int bookingId)`

Ends the rental. DUH!

**Parameters**:

* `bookingId` - The booking ID of the rental. It is provided in the booking details when the renter rents a car

**Returns**:

* Outstanding fees
* Confirmation message

**Example Usage**:

```javascript
    carrental.endRental(1);
```

---

### `.getCustomerDetails(Int userId)`

Retrieves details of a user

**Parameters**:

* `userId` - The ID of the user

**Returns**:

* The details of the user

**Example Usage**:

```javascript
    carrental.getCustomerDetails(1);
```

---

### `.searchCar({ [params] })`

Searches for a vehicle

**Parameters**:

* `[params]` - The parameters and arguments in the [.addCar()](#addcarstring-make-string-model-int-seats-int-capacity-string-regno) function

**Returns**:

* Vehicles matching search parameters

**Example Usage**:

```javascript
    // Search car by seat count
    carrental.searchCar({ seats: 5 });

    // Search car by car make
    carrental.searchCar({ make: "Opel" });

    // Search car by make AND seat count
    carrental.searchCar({ make: "Opel", seats: 5 });
    // etc.
```

---

### `.checkBookings(String regno)`

**Parameters**:

* `regno` - The registration number of the vehicle

**Returns**:

* All of the bookings made with the vehicle, ongoing or not

**Example Usage**:

```javascript
    carrental.checkBookings("SBA1234A");
```

---
# References
Provide the references that you have used to support your assignment. 