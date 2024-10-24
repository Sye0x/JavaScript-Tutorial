// Taking Users Input
// Method 1

//let userName;
//userName = window.prompt("What is your UserName?");
//console.log(`UserName: ${userName}`);
let userName;
document.getElementById("submit").onclick = function () {
  userName = document.getElementById("mytext").value;
  document.getElementById("Wellcome").textContent = `Wellcome ${userName}`;
};
