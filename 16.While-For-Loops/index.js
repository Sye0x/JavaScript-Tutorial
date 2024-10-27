let username = "";

// a while will run until a certin condition  is true
while (username === "" || username === null) {
  username = window.prompt("Enter Your Username");
}

let password;
// A do while will run atleast once
do {
  password = window.prompt("Enter Your Password");
} while (password === "" || password === null);

for (let i = 0; i <= 10; i++) {
  if (i === 4) {
    continue;
  }
  if (i === -1) {
    break;
  }
  console.log(i);
}
