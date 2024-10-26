const memberBtn = document.getElementById("memberBtn");
const cashBtn = document.getElementById("cashBtn");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const Submit = document.getElementById("submit");
const memberText = document.getElementById("memberText");
const paymentText = document.getElementById("paymentText");
Submit.onclick = function () {
  if (memberBtn.checked) {
    memberText.textContent = "You are a member.";
  } else {
    memberText.textContent = "You are not a member.";
  }

  if (cashBtn.checked) {
    paymentText.textContent = "You will pay by Cash.";
  } else if (visaBtn.checked) {
    paymentText.textContent = "You will pay by Visa card.";
  } else if (mastercardBtn.checked) {
    paymentText.textContent = "You will pay by Mastercard card.";
  } else if (paypalBtn.checked) {
    paymentText.textContent = "You will pay by Paypal.";
  } else {
    paymentText.textContent = "No payment method was selected. Try again";
  }
};
