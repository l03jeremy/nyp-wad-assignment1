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

Full examples are provided in [index.js](https://github.com/{OWNER}/{REPO}/blob/main/index.js). 
[test](/blob/main/index.js)

Simply include the package to your project
```javascript
    const carrental = require('CarRental.js');
```
## Functions

### `.addCar(String make, String model, Int seats, Int capacity, String regno)`
Adds a vehicle to the system. All fields are required
```javascript
    carrental.addCar("Opel", "Astra", 5, 1800, "SBA1234A");
```

### `.register(String username, String fullname, Int age, Int phone)`
Register a user to the system. All fields are required.
```javascript
    carrental.register("username", "User Name", 20, 91234567);
```

### `.rentCar(String regno, Int customerId, Int startDateTime = null, Int endDateTime = null)`
Start a rental.

**Returns**:

* Booking details

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
### `.endRental(Int bookingId)`

## Examples

### Registering

To start, you can register as a user using the `.register()` function. Include your username, name, age, and phone number in the arguments, as such:

```javascript
    carrental.register("username", "User Name", 20, 91234567);
```

### Adding a car (for admins)

You can use the `.addCar()` function to add a vehicle. Include the vehicle Make, Model, Seats, Capacity, and its registration number into the function:
```javascript
    carrental.addCar("Opel", "Astra", 5, 1800, "SBA1234A");
```

### Renting
There are 2 functions for this category, to start and end a rental.
* Starting a rental:
  - Basic Usage:
    - Use `.rentCar()` to start a rental. You must provide the registration number of the car you are renting, and your user ID, before starting the rental. Use it like this:
        ```javascript
            carrental.rentCar("SBA1234A", 2);
        ```
  - More defined rental (defining start and end DateTime)
    - You have to provide the unix time as the parameter.
        ```javascript
            carrental.rentCar("SBA1234A", 2, 1731249100000, 1731340800000);
        ```
        - Defining the start date can be used if the user wants to start the rental at a later date or time. If the start date is left null, the rental starts immediately.
        - Defining the end date can be used for the user to enjoy lower rental rates, only if they return the car before the rental end date. The function will surcharge the user if they exceed the rental period.
* Ending a rental:
  - You basically just have to use the `.endRental()` function with the rental ID. which is shown when you book the car.
  ```javascript
      carrental.endRental(3);
  ```

# References
Provide the references that you have used to support your assignment. 