// Class Users that tracks the count of registered users
class Users {
  // Static property that holds the number of registered users
  static userCount = 0;

  // Constructor that is called when a new user is created
  constructor(name) {
    this.name = name; // Assign the passed name to the instance
    console.log(`${name} just registered.`); // Log the registration message
    Users.userCount += 1; // Increment the static user count by 1
  }

  // Static method to display the current number of registered users
  static userCounts() {
    console.log(`No of Users Registered: ${this.userCount}`); // Log the number of registered users
  }
}

// Call static method userCounts() to show the user count before any user is created
Users.userCounts(); // Output: No of Users Registered: 0

// Create a new user with the name 'Syed', which triggers the constructor
const user1 = new Users("Syed"); // Output: Syed just registered.

// Call static method userCounts() again to display the updated count after user1 is registered
Users.userCounts(); // Output: No of Users Registered: 1

// Create another user with the name 'Hamza', which triggers the constructor
const user2 = new Users("Hamza"); // Output: Hamza just registered.

// Call static method userCounts() to display the updated count after user2 is registered
Users.userCounts(); // Output: No of Users Registered: 2

// Create another user with the name 'Ali', which triggers the constructor
const user3 = new Users("Ali"); // Output: Ali just registered.

// Call static method userCounts() to display the updated count after user3 is registered
Users.userCounts(); // Output: No of Users Registered: 3
