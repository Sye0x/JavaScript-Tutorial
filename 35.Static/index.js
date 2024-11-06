class Users {
  static userCount = 0;
  constructor(name) {
    this.name = name;
    console.log(`${name} just registered.`);
    Users.userCount += 1;
  }
  static userCounts() {
    console.log(`No of Users Registered:${this.userCount}`);
  }
}
Users.userCounts();
const user1 = new Users("Syed");
Users.userCounts();
const user2 = new Users("Hamza");
Users.userCounts();
const user3 = new Users("Ali");
Users.userCounts();
