const button = document.querySelector("#btn");
button.addEventListener("click", () => {
  const checkBox = document.querySelectorAll('input[type="checkbox"]');
  let totalAmount = 0;
  let productName = [];
  for (let i = 0; i < checkBox.length; i++) {
    let box = checkBox[i];
    if (box.checked) {
      totalAmount += parseFloat(box.getAttribute("data-price"));
    }
  }
  if (totalAmount > 0) {
    let confirmOrderPlace = confirm(`Your Total Amount: ${totalAmount}`);
    if (confirmOrderPlace) {
      document.write("You Order has been Placed, You can pay at the counter");
    } else {
      document.write("Your Order is Cancelled");
    }
  } else {
    alert("Please Select atleast One Item");
  }
});
