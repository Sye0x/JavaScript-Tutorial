const bill = document.getElementById("bill"); // lowercase "bill"
const finalBill = document.getElementById("finalBill");

bill.addEventListener("input", function () {
  const billAmount = Number(bill.value);
  if (billAmount > 50) {
    finalBill.textContent = `Total Bill: ${billAmount - 0.1 * billAmount}`;
  } else {
    finalBill.textContent = `Total Bill: ${billAmount}`;
  }
});
