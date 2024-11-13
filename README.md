# Assignment 1

## Car Rental Manager for a Car Rental Company
This app allows you to manage vehicles, users as well as bookings within the application

## Usage

There are 7 functions.

### Registering

To start, you can register as a user using the `.register()` function. Include your username, name, age, and phone number in the arguments, as such:

```javascript
    carrental.register("username", "User Name", 20, 91234567);
```

### Adding a car (for admins)

You can use the `.addCar()` function to add a vehicle. Include the vehicle Make, Model, Seats, Capacity, and its registration number into the function:
```javascript
    carrental.addCar("Opel", "Astra", 5, 1800, "SBA1234A")
```

### Renting
There are 2 functions for this category, to start and end a rental.
    - Starting a rental:
    Use `.rentCar()` to start a rental. You must provide the registration number of the car you are renting, and your user ID, before starting the rental. Use it like this:
    ```javascript
        carrental.rentCar("SBA1234A", 2)
    ```

# References
Provide the references that you have used to support your assignment. 